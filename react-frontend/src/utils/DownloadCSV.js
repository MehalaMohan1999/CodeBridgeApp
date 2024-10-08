import React from 'react';
import { Button } from 'primereact/button';

const DownloadCSV = ({ data, fileName }) => {
    const convertToCSV = (objArray) => {
        if (!objArray || !Array.isArray(objArray) || objArray.length === 0) {
            return ''; // Return an empty string if data is invalid
        }

        const array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
        let str = '';

        // Add column headers
        const keys = Object.keys(array[0]);
        str += keys.join(',') + '\r\n';

        array.forEach(item => {
            let line = '';
            keys.forEach(key => {
                if (line !== '') line += ',';
                if (typeof item[key] === 'object' && item[key] !== null) {
                    line += JSON.stringify(item[key]); // Convert objects to string
                } else {
                    line += item[key] !== undefined ? item[key] : ''; // Handle undefined values
                }
            });
            str += line + '\r\n';
        });
        return str;
    };

    const downloadCSV = () => {
        const csvString = convertToCSV(data);
        if (csvString === '') {
            console.error('Invalid or empty data provided');
            return;
        }

        const csvData = new Blob([csvString], { type: 'text/csv' });
        const csvURL = URL.createObjectURL(csvData);
        const link = document.createElement('a');
        link.href = csvURL;
        link.download = `${fileName}.csv`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return <Button onClick={downloadCSV} text label="Download CSV"></Button>;
};

export default DownloadCSV;

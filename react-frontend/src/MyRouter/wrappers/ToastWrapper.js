import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { Toast } from 'primereact/toast';
import client from '../../services/restClient'; 
const ToastWrapper = ({ _stamp, type, title, message, life, user }) => {
    let toast = useRef(null);

    useEffect(() => {
        if (message) {
            showToast(type, title, message, life);
            createNotification(type, title, message);
        }
    }, [_stamp]); // stamp to trigger effect everytime
    const showToast = (type, title, message, life) => {
        toast.current.show({ severity: type, summary: title, detail: message, life: life || 5000 });
    };

    const createNotification = async (type, title, message) => {
        if (!user?._id) {
            console.error("User ID is not available");
            return;
        }

        const notificationData = {
            toUser: user._id, 
            content: `${title}: ${message}`, 
            read: false, 
            sent: new Date(), 
            createdBy: user._id, 
            updatedBy: user._id,
        };

        try {
            await client.service("notifications").create(notificationData);
            console.log("Notification created successfully");
        } catch (error) {
            console.error("Error creating notification:", error);
        }
    };


    return <Toast ref={toast} style={{ zIndex: 1200 }} />;
};

const mapState = (state) => {
    const { type, title, message, life, _stamp } = state.toast;
    const { user } = state.auth; 
    return { type, title, message, life, _stamp, user };
};

export default connect(mapState)(ToastWrapper);

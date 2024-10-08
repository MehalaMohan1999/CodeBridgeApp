module.exports = function logErrors() {
  return async (context) => {
    const { error, params } = context;

    //console.log("Error Hook Triggered", params);

    if (error && typeof params?.user?._id !== "undefined") {
      const errorData = {
        serviceName: context.path,
        error: JSON.stringify(error),
        message: error.message,
        stack: "reactjs",
        details: "",
        createdBy: params.user._id,
        updatedBy: params.user._id,
      };

      await context.app.service("errors").create(errorData);
    }
    return context;
  };
};

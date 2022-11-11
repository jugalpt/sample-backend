function makeResponse({
  status,
  data,
  error,
  message = "internal server error",
}) {
  if (status === "ERROR") {
    return {
      success: false,
      message: message,
      error,
    };
  }

  if (status === "SUCCESS") {
    return {
      success: true,
      message: message,
      ...data,
    };
  }

  return {
    success: false,
    message: "unknown response",
  };
}

export { makeResponse };

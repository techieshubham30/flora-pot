

const signOut = (navigate, setAuth) => {
  localStorage.removeItem("TOKEN");
  setAuth({
      isAuthenticated: false,
      token: "",
  });
  navigate("/");
};

export { signOut };

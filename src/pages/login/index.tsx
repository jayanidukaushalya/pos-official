import { useEffect } from "react";
import { ipcRenderer } from "electron";
import { TextField, Grid, Typography, IconButton } from "@mui/material";
import { VscChromeMinimize, VscChromeClose } from "react-icons/vsc";
import { colors } from "@mui/material";
import { useForm } from "react-hook-form";
import request from "../../config/axios";
import axios, { AxiosError } from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DASHBOARD } from "../../routes/path";
import MyLoadingButton from "../../components/button/MyLoadingButton";
import Alert from "@mui/material/Alert";

type Form = {
  username: "";
  password: "";
};

type AxiosResponse = {
  message: string;
};

const Login = () => {
  useEffect(() => {
    setTimeout(() => {
      ipcRenderer.send("unmaximize-window");
    }, 5);
    setTimeout(() => {
      ipcRenderer.send("resize-false");
    }, 10);
    setTimeout(() => {
      ipcRenderer.send("change-window-size-500-500");
    }, 20);
  }, []);

  const handleClose = () => {
    ipcRenderer.send("close-window");
  };

  const handleMinimize = () => {
    ipcRenderer.send("minimize-window");
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Form>({
    defaultValues: {
      username: "",
      password: "",
    },
    mode: "onSubmit",
  });

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data: Form) => {
    setIsLoading(true);
    try {
      console.log(data);
      const response = await request.post("/auth/login", JSON.stringify(data));

      if (response.status == 200) {
        console.log(response.data.message);
        setIsError(false);
        reset();

        window.localStorage.setItem("userId", response.data.user[0].id);
        window.localStorage.setItem("username", response.data.user[0].username);

        navigate(DASHBOARD);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<AxiosResponse>;
        const errorMessage = axiosError?.response?.data?.message;

        if (errorMessage) {
          setIsError(true);
          setErrorMessage(errorMessage?.toString());
        } else {
          setIsError(true);
          setErrorMessage("An unknown error occurred.");
        }
      } else {
        console.log("Non-Axios error occurred:", error);
        setIsError(true);
        setErrorMessage("An unexpected error occurred.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Grid
      position={"relative"}
      className="movable-true"
      container
      gap={2}
      justifyContent={"center"}
      flexDirection={"column"}
      padding={10}
      height={"100vh"}
    >
      <Grid
        item
        position={"absolute"}
        right={5}
        top={5}
        display={"flex"}
        alignItems={"center"}
        className="movable-false"
      >
        <IconButton onClick={handleMinimize} color="warning">
          <VscChromeMinimize />
        </IconButton>
        <IconButton onClick={handleClose} color="warning">
          <VscChromeClose />
        </IconButton>
      </Grid>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid
          className="movable-false"
          item
          display={"flex"}
          gap={2}
          justifyContent={"center"}
          flexDirection={"column"}
        >
          <Typography
            variant="h4"
            textAlign={"center"}
            component="h1"
            fontWeight={"bold"}
            color={colors.grey[800]}
          >
            Login
          </Typography>
          {isError && !isLoading && (
            <Alert variant="filled" severity="error">
              {errorMessage}
            </Alert>
          )}
          <TextField
            {...register("username", {
              required: {
                value: true,
                message: "Username is required !",
              },
            })}
            error={!!errors.username}
            helperText={errors.username?.message}
            label="Username"
            color="warning"
            variant="outlined"
          />
          <TextField
            {...register("password", {
              required: {
                value: true,
                message: "Password is required !",
              },
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
            type="password"
            color="warning"
            label="Password"
            variant="outlined"
          />
          <MyLoadingButton
            buttonLabel="Login"
            loadingIndicator="Validating..."
            isFullWidth={true}
            isLoading={isLoading}
            variant="contained"
            type="submit"
          />
        </Grid>
      </form>
    </Grid>
  );
};

export default Login;

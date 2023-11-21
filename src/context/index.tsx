"use client";

import { FormHandles } from "@unform/core";
import {
  ReactNode,
  RefObject,
  createContext,
  useContext,
  useRef,
  useState,
} from "react";

interface IPageContext {
  mainFormRef: RefObject<FormHandles>;

  handleTopBarVisble: () => void;
  topbarVisible: boolean;

  handleRecoveryVisible: () => void;
  recoveryPassModalVisible: boolean;

  handleMainFormData: (data: { email: string }) => void;
  emailFieldValue: string;

  handleConfettiVisible: (param: boolean) => void;
  confettiVisible: boolean;
}

interface IPage {
  children: ReactNode;
}

const PagesContext = createContext({} as IPageContext);

export const usePagesContext = () => {
  return useContext(PagesContext);
};

export const PagesProvider = ({ children }: IPage) => {
  const mainFormRef = useRef<FormHandles>(null);
  const [topbarVisible, setTopbarVisible] = useState(true);
  const [recoveryPassModalVisible, setRecoveryPassModalVisible] =
    useState(false);
  const [emailFieldValue, setEmailFieldValue] = useState("");
  const [confettiVisible, setConfettiVisible] = useState(false);

  const handleTopBarVisble = () => setTopbarVisible(!topbarVisible);

  const handleRecoveryVisible = () =>
    setRecoveryPassModalVisible(!recoveryPassModalVisible);

  const handleMainFormData = (data: { email: string }) =>
    setEmailFieldValue(data.email);

  const handleConfettiVisible = (param: boolean) => setConfettiVisible(param);

  return (
    <PagesContext.Provider
      value={{
        mainFormRef,

        handleTopBarVisble,
        topbarVisible,

        handleRecoveryVisible,
        recoveryPassModalVisible,

        handleMainFormData,
        emailFieldValue,

        handleConfettiVisible,
        confettiVisible,
      }}
    >
      {children}
    </PagesContext.Provider>
  );
};

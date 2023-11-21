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

  const handleTopBarVisble = () => setTopbarVisible(!topbarVisible);
  const handleRecoveryVisible = () =>
    setRecoveryPassModalVisible(!recoveryPassModalVisible);
  const handleMainFormData = (data: { email: string }) =>
    setEmailFieldValue(data.email);

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
      }}
    >
      {children}
    </PagesContext.Provider>
  );
};

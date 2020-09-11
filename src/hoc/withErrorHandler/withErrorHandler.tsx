import React, { useEffect, useState } from "react";
import { Modal } from "../../components/UI/Modal/Modal";
import fetchIntercept from "fetch-intercept";

type withErrorHandlerPropsType = {};

type withErrorHandlerState = {
  error: unknown;
};

export const withErrorHandler = <P extends unknown>(
  WrappedComponent: React.ComponentType<P>
) => {
  // const [errorState, changeErrorState] = useState<withErrorHandlerState>({
  //   error: null,
  // });

  // useEffect(() => {
  //   fetchIntercept.register({
  //     request(url: string, config: any): any[] {
  //       changeErrorState({ error: null });
  //       return [url, config];
  //     },
  //
  //     responseError(error: any): Promise<any> {
  //       changeErrorState({ error: error });
  //       return Promise.reject(error);
  //     },
  //   });
  // });

  // const errorConfirmedHandler = () => {
  //   changeErrorState({error: null});
  // };

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  return (props: P & withErrorHandlerPropsType) => {
    return (
      <>
        {/*<Modal show={!!errorState.error} onCloseModal={errorConfirmedHandler}>{errorState.error ? errorState.error.message : null}</Modal>*/}
        <WrappedComponent {...props} />
      </>
    );
  };
};

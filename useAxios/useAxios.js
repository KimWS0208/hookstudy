import defaultAxios from "axios";
import { useState, useEffect } from "react";

const useAxios = (opts, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null
  });
  const [trigger, setTrigger] = useState(0);
  if (!opts.url) {
    return;
  }

  const refetch = () => {
    setState({
      ...state, // 이거랑 loading:true랑 순서가 바뀌면 안된다...why??
      loading: true
    });
    setTrigger(Date.now());
  };

  //data가 object라 안보여서 json타입으로 바꿔준다.
  useEffect(() => {
    axiosInstance(opts)
      .then(data => {
        setState({
          ...state,
          loading: false,
          data
        });
      })
      .catch(error => {
        //error가 있다면
        setState({ ...state, loading: false, error });
      });
  }, [trigger]);
  return { ...state, refetch };
};

export default useAxios;

const useOnClickListener = () => {
  const onClick = (e: string) => {
    console.log('event is', e);
  };

  return { onClick };
};

export default useOnClickListener;

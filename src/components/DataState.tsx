type DataStateProps = {
  message: string;
};

function DataState({ message }: DataStateProps) {
  return <div className="data-state">{message}</div>;
}

export default DataState;

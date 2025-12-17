import SingleItem from './SingleItem';
import { useFetchTask } from './assets/reactQueryCustomHooks';


const Items = ({ items }) => {
  const {isLoading,isError,data } = useFetchTask();
  
  if (isLoading){
    return <p style={{marginTop: '1rem'}}> ...loading</p>
  }

  if (isError) {
 return <p style={{ marginTop: '1rem' }}> There was an error...</p>;
  }

  return (
    <div className="items">
      {data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;

import CityComponent from "./CityComponent";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";

function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityComponent city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;

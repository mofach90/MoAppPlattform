import Carousel from 'react-material-ui-carousel';
import Item from './carousselComponentS/Item';
const CarouselComponent = () => {
  const listApps = [
    {
      name: 'To-Do App',
      url: 'assets/TodoApp.jpg',
    },
    {
      name: 'Weather App',
      url: 'assets/wheatherApp.jpg',
    },
    {
      name: 'Recipe App',
      url: 'assets/recipe.jpg',
    },
  ];
  return (
    <Carousel
      navButtonsProps={{
        style: {
          color: 'rgb(55, 255, 255)',
          opacity: 0.5,
        },
      }}
    >
      {listApps.map((app, i) => (
        <Item key={i} item={app} />
      ))}
    </Carousel>
  );
};

export default CarouselComponent;

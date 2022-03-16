import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Box } from './components/context/Box';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { User } from './components/context/User';
import { UserContextProvider } from './components/context/UserContext';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { ClassCounter } from './components/class/Counter';
import { Status } from './components/Status';
import { Profile } from './components/auth/Profile';
import { Private } from './components/auth/Private';
import { List } from './components/generics/List';
import { RandomNumber } from './components/restriction/RandomNumberProps';
import { Toast } from './templateLiterals/Toast';
import { CustomButton } from './components/html/Button';
import { CustomInput } from './components/html/Input';
import { Text } from './components/polymorphic/Text';
function App() {
  const personName = {
    first: 'Sam',
    last: 'L',
  };

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne',
    },
    {
      first: 'Clack',
      last: 'Kent',
    },
    {
      first: 'Princess',
      last: 'Diana',
    },
  ];
  return (
    <div className="App">
      <Status status="success" />
      <Heading>placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicpariol!</Heading>
      </Oscar>
      <Greet name="Sam" isLoggedIn={true} />
      <Button
        handleClick={(event, id) => {
          console.log(`ID: ${id} Button clicked!`, event);
        }}
      />
      <Input value="" handleChange={(event) => console.log(event)} />
      <Container
        styles={{ border: '2px sold black', padding: '1rem', color: 'red' }}
      />

      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>

      <UserContextProvider>
        <User />
      </UserContextProvider>

      <ClassCounter message="Class counter test" />

      <Private isLoggedIn={true} component={Profile} />

      {/* <List
        items={['Batman', 'Superman', 'Wonder Woman']}
        onClick={(item) => console.log(item)}
      />

      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} /> */}
      <List
        items={[
          {
            id: 1,
            first: 'Bruce',
            last: 'Wayne',
          },
          {
            id: 2,
            first: 'Clack',
            last: 'Kent',
          },
          {
            id: 3,
            first: 'Princess',
            last: 'Diana',
          },
        ]}
        onClick={(item) => console.log(item)}
      />

      <RandomNumber value={0} isZero />

      <Toast position="center" />

      <CustomButton variant="primary" onClick={() => console.log('clicked')}>
        Primary Button
      </CustomButton>
      <CustomInput />

      <Text as="h1" size="lg">
        Heading
      </Text>
      <Text as="p" size="md">
        Paragraph
      </Text>
      <Text as="label" htmlFor='someId' size="sm" color="secondary">
        Label
      </Text>
    </div>
  );
}

export default App;

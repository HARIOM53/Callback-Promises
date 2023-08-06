const ageInDays = ({ firstName, lastName, age }) => {
    const fullName = `${firstName} ${lastName}`;
    const ageInDaysValue = age * 365;
  
    return () => {
      console.log(`The person's full name is ${fullName} and their age in days is ${ageInDaysValue}.`);
    };
  };
  
  // Example
  const person = {
    firstName: 'mithun',
    lastName: 'singh',
    age: 30
  };
  
  const logPersonAgeInDays = ageInDays(person);
  logPersonAgeInDays();
  
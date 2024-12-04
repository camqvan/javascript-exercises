const findTheOldest = function (people) {
  const getAge = function (birth, death) {
    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;
  };

  return people.reduce((old, older) => {
    const oldAge = getAge(old.yearOfBirth, old.yearOfDeath);
    const olderAge = getAge(older.yearOfBirth, older.yearOfDeath);

    return oldAge < olderAge ? older : old;
  });
};

// Do not edit below this line
module.exports = findTheOldest;

import { nationalityTypes } from 'src/app/enums/NationalityTypes';
import { PersonModel } from 'src/app/model/PersonModel';

const testPerson = (score: number, person: PersonModel): string => {
  score = verifyPerson(person);
  return PersonTypes[score];
};

const verifyPerson = (person: PersonModel): number => {
  let score = 0;
  person.age > 18 ? (score += 4) : (score += 1);
  person.heigth > 1.7 ? (score += 5) : (score += 1);
  if (nationalityTypes[person.nationality]) {
    score += 5;
  }
  return score;
};

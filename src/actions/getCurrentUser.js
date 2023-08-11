import { setName, setAge, setImg } from '@/redux/features/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { faker } from '@faker-js/faker';

export default async function getCurrentUser() {
  const dispatch = useDispatch();
  dispatch(setName(faker.person.firstName()));
  dispatch(setAge(faker.number.int({ min: 0, max: 100 })));
  dispatch(setImg(faker.image.urlPicsumPhotos()));

  const user = useSelector((state)=> state.user.user)

  return user;
}

import TheButton from './components/TheButton';
import TheInput from './components/TheInput';
import TheForm from './components/TheForm';
// import { fetchUsers } from '@/lib/data';

export default async function Page() {
  // const users = await fetchUsers()
  console.log("%c ✔️: Page -> users ", "font-size:16px;background-color:#ccdbe8;color:black;", users)
  return <div className='flex flex-col gap-8'>
    <TheButton></TheButton>
    <TheInput></TheInput>
    <TheForm></TheForm>
  </div>;
}

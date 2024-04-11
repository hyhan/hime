import TheButton from './components/TheButton';
import TheInput from './components/TheInput';
import TheForm from './components/TheForm';

export default function Page() {
  return <div className='flex flex-col gap-8'>
    <TheButton></TheButton>
    <TheInput></TheInput>
    <TheForm></TheForm>
  </div>;
}

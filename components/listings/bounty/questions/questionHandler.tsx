import {
  Checkbox,
  FormLabel,
  HStack,
  Input,
  Select,
  Textarea,
} from '@chakra-ui/react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { QuestionType } from './builder';

interface Props {
  question: string;
  index: string;
  type: QuestionType;
  options: string[];
  label: string;
  register: UseFormRegister<FieldValues>;
}
export const QuestionHandler = ({
  index,
  question,
  type,
  options,
  register,
  label,
}: Props) => {
  if (type === 'text') {
    return (
      <>
        <FormLabel color={'gray.600 !important'} fontSize={'1.1rem'}>
          {question}
        </FormLabel>
        <Input {...register(label)} />
      </>
    );
  } else if (type === 'long-text') {
    return (
      <>
        <FormLabel color={'gray.600 !important'} fontSize={'1.1rem'}>
          {question}
        </FormLabel>
        <Textarea {...register(label)} />
      </>
    );
  } else if (type === 'checkbox') {
    return (
      <>
        <HStack justify={'start'} align={'center'}>
          <FormLabel color={'gray.600 !important'} fontSize={'1.1rem'}>
            {question}
          </FormLabel>
          <Checkbox {...register(label)} mt={'-10px !important'} />
        </HStack>
      </>
    );
  } else if (type === 'single-choice') {
    return (
      <>
        <FormLabel color={'gray.600 !important'} fontSize={'1.1rem'}>
          {question}
        </FormLabel>
        <Select {...register(label)}>
          {options.map((e) => {
            return (
              <option key={index} value={e}>
                {e}
              </option>
            );
          })}
        </Select>
      </>
    );
  } else {
    return <></>;
  }
};

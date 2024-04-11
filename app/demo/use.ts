import { useRequest } from 'ahooks';
import { PrismaClient } from '@prisma/client';

export const useCreateUser = () => {
  return useRequest(createUser, {
    manual: true,
    loadingDelay: 300,
    onSuccess() {
      console.log('aa')
    },
    onError(error) {
      console.log(error)
    },
  });
};
const prisma = new PrismaClient();
const createUser = () => {
  return prisma.user.create({
    data: {
      email: '125173679@qq.com',
      name: 'hanhui',
    }
  })
}

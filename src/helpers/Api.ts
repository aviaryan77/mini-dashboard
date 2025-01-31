import request from './Request';

export const sendOtpApi = ({
  data,
}: {
  data: {
    phone?: string; //either phone or email
    email?: string; //either phone or email
    role?: 'teacher' | 'student' | '';
  };
}): Promise<any> => {
  let { role, ...newData } = data;
  const isTeacher = role === 'teacher';
  return request({
    data: newData,
    method: 'post',
    endpoint: isTeacher ? `/teachers` : `/students/otp`,
    // log: true,
  });
};

export const loginApi = ({ data }: { data: {email:string; password:string} }): Promise<any> => {


  // return request({
  //   data: data,
  //   method: 'post',
  //   endpoint: `/teachers/signin`,
  //   // log: true,
  // });

  // Hardcode mock credentials (e.g., user@example.com and password123) and validate them.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.email === 'user@example.com' && data.password === 'password123') {
        resolve({
          status: 200,
          data: {
            accessToken:'1234567890',
            user : {
              email: 'user@example.com',
              name: 'test name',
            }
          },
        });
      }
      reject({
        status: 400,
        data: {
          error: 'Invalid credentials',
        },
      });
    }
    , 2000);
  }
  );
};


// refreshTokenApi,
export const refreshTokenApi = ({}): Promise<any> => {
  return request({
    method: 'post',
    endpoint: `/refresh`,
    log: true,
  });
};

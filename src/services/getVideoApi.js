import * as http from '~/utils/http';
export const getListVideo = async (type, page) => {
  try {
    const res = await http.get(`videos`, {
      params: {
        type,
        page,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

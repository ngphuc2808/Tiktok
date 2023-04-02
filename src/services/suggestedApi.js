import * as http from '~/utils/http';
export const suggested = async (per_page, page = 1) => {
  try {
    const res = await http.get(`users/suggested`, {
      params: {
        page,
        per_page,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

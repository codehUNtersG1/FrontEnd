import 'isomorphic-fetch';

const endpoint = '/api/v1/posts';

const api = {
  posts: {
    async read(id = null) {
      try {
        if (!id) {
          const response = await fetch(endpoint);
          const data = await response.json();
          return Promise.resolve(data);
        }
        const response = await fetch(`${endpoint}/${id}`);
        const data = await response.json();
        return Promise.resolve(data);
      } catch (error) {
        return Promise.reject(error);
      }
    },
    async create(data) {
      try {
        const response = await fetch({
          url: endpoint,
          method: 'POST',
          body: data,
        });
        const data = await response.json();
        return Promise.resolve(data);
      } catch (error) {
        return Promise.reject(error);
      }
    },
    async update(id, data) {
      try {
        const response = await fetch({
          url: `${endpoint}/${id}`,
          method: 'PUT',
          body: data,
        });
        const data = await response.json();
        return Promise.resolve(data);
      } catch (error) {
        return Promise.reject(error);
      }
    },
    async delete(id) {
      try {
        const response = await fetch({
          url: `${endpoint}/${id}`,
          method: 'DELETE',
        });
        const data = await response.json();
        return Promise.resolve(data);
      } catch (error) {
        return Promise.reject(error);
      }
    },
  },
};

export default api;
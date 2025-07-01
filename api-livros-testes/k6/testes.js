import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '30s', target: 10 },
    { duration: '1m', target: 10 },
    { duration: '10s', target: 0 },
  ],
};

const baseURL = 'http://localhost:3000/livros';

export default function () {
  let res = http.get(baseURL);
  check(res, { 'GET status 200': (r) => r.status === 200 });

  res = http.post(baseURL, JSON.stringify({
    titulo: 'Livro K6',
    autor: 'Teste K6',
    anoPublicacao: 2025
  }), { headers: { 'Content-Type': 'application/json' } });
  check(res, { 'POST status 201': (r) => r.status === 201 });

  const id = JSON.parse(res.body).book.id;

  res = http.put(`${baseURL}/${id}`, JSON.stringify({
    titulo: 'Livro Atualizado'
  }), { headers: { 'Content-Type': 'application/json' } });
  check(res, { 'PUT status 200': (r) => r.status === 200 });

  res = http.del(`${baseURL}/${id}`);
  check(res, { 'DELETE status 204': (r) => r.status === 204 });

  sleep(1);
}

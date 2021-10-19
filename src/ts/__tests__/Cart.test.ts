import Cart from '../service/Cart';
import Movie from "../domain/Movie";
import {MovieFormats} from "../enums/movie-formats.enum";
import {Countries} from "../enums/countries.enum";
import {Genres} from "../enums/genres.enum";
import MusicAlbum from "../domain/MusicAlbum";
import Book from "../domain/Book";
import Buyable from "../domain/Buyable";

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('add movie to cart', () => {
  const cart = new Cart();

  cart.add(new Movie(1001,'The Avengers', 1000, MovieFormats.IMAX, 'Мстители', 2020, Countries.USA, 'Avengers Assemble', [Genres.Fantastic], 137, 'http:google.com'))

  expect(cart.items.length).toBe(1);
  expect(cart.items[0]).toEqual({
    country: 1,
    format: 1,
    genre: [3],
    id: 1001,
    localName: "Мстители",
    name: "The Avengers",
    poster: "http:google.com",
    price: 1000,
    tagline: "Avengers Assemble",
    timing: 137,
    year: 2020,
  })
})

test('add music album to cart', () => {
  const cart = new Cart();

  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));

  expect(cart.items.length).toBe(1);
  expect(cart.items[0]).toEqual({
    author: "Linkin Park",
    id: 1008,
    name: "Meteora",
    price: 900,
  })
})

test('add book to cart', () => {
  const cart = new Cart();

  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));

  expect(cart.items.length).toBe(1);
  expect(cart.items[0]).toEqual({
    author: "Leo Tolstoy",
    id: 1001,
    name: "War and Piece",
    pages: 1225,
    price: 2000,
  })
})

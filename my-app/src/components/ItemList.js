import React from 'react';
import Item from './Item';

const items = [
    {
        name: 'Item 1',
        pic: 'https://picsum.photos/200/300',
        price: 100,
        rating: 4.5,
    },
    {
        name: 'Item 2',
        pic: 'https://picsum.photos/200/300',
        price: 100,
        rating: 4.5,
    },
    {
        name: 'Item 3',
        pic: 'https://picsum.photos/200/300',
        price: 100,
        rating: 4.5,
    },
    {
        name: 'Item 4',
        pic: 'https://picsum.photos/200/300',
        price: 100,
        rating: 4.5,
    },
    {
        name: 'Item 5',
        pic: 'https://picsum.photos/200/300',
        price: 100,
        rating: 4.5,
    },
    {
        name: 'Item 6',
        pic: 'https://picsum.photos/200/300',
        price: 100,
        rating: 4.5,
    },
];

export default function ItemList() {
    return (
        <div className="container p-5">
            <div className="row"> 
                {items.map((item, index) => (
                    <div key={index} className="col-lg-4 col-md-12 mb-4">
                        <Item {...item} />
                    </div>
                ))}
            </div>
        </div>
    );
}
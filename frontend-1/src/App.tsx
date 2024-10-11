import React, { useEffect, useState } from 'react';
import { List } from 'antd';

export interface Book {
    title: string;
    author: string;
}
const BookList: React.FC = () => {
    const [books, setBooks] = useState<Book[]>([]);
    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch(import.meta.env.VITE_BACKEND_URL);
                const data = await response.json();
                setBooks(data);
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };
        fetchBooks();
    }, []);
    return (
        <div>
            <h1>Book List</h1>
            <List
                grid={{ gutter: 16, column: 4 }}
                dataSource={books}
                renderItem={book => (
                    <List.Item>
                        <h2 title={book.title}>
                            <p>{book.author}</p>
                        </h2>
                    </List.Item>
                )}
            />
        </div>
    );
};
export default BookList;
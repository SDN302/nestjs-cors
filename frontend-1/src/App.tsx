import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, List, Typography, Row, Col } from 'antd';

export interface Book {
    title: string;
    author: string;
}

const BookList: React.FC = () => {
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get(import.meta.env.VITE_BACKEND_URL); 
                setBooks(response.data);
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };
        fetchBooks();
    }, []);

    return (
        <Row justify="center" align="middle" style={{ padding: '20px' }}>
            <Col xs={24} sm={20} md={16} lg={12}>
                <Typography.Title level={1} style={{ textAlign: 'center', marginBottom: '30px' }}>Book List</Typography.Title>
                <Card>
                    <List
                        dataSource={books}
                        renderItem={book => (
                            <List.Item style={{ width: '100%' }}>
                                <Card
                                    type="inner"
                                    title={<Typography.Title level={4} style={{ margin: 0 }}>{book.title}</Typography.Title>}
                                    style={{
                                        width: '100%',
                                        borderRadius: '10px',
                                        marginBottom: '16px',
                                    }}
                                >
                                    <Typography.Text type="secondary">Author: {book.author}</Typography.Text>
                                </Card>
                            </List.Item>
                        )}
                    />
                </Card>
            </Col>
        </Row>
    );
};

export default BookList;

from flask import Flask, jsonify, request
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)  # This allows your frontend to call this API

# Create or connect to SQLite database
def get_db():
    conn = sqlite3.connect('database.db')
    conn.row_factory = sqlite3.Row
    return conn

# Initialize the database with tables
def init_db():
    with app.app_context():
        db = get_db()
        db.execute('''
            CREATE TABLE IF NOT EXISTS items (
                id INTEGER PRIMARY KEY,
                name TEXT NOT NULL,
                price INTEGER NOT NULL,
                timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        ''')
        db.commit()

@app.route('/api/items', methods=['GET'])
def get_items():
    db = get_db()
    items = db.execute('SELECT * FROM items ORDER BY timestamp DESC').fetchall()
    return jsonify([dict(item) for item in items])

@app.route('/api/items', methods=['POST'])
def add_item():
    data = request.json
    if not data or 'name' not in data or 'price' not in data:
        return jsonify({'error': 'Missing name or price'}), 400
    
    db = get_db()
    db.execute('INSERT INTO items (name, price) VALUES (?, ?)',
               [data['name'], data['price']])
    db.commit()
    return jsonify({'status': 'success'}), 201

if __name__ == '__main__':
    init_db()  # Initialize database tables
    app.run(debug=True, port=5000)
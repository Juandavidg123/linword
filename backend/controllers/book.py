from flask import jsonify
from db.connection import cur

def getBooks_():
    try:
        cur.execute(f"SELECT * FROM books")
        books = cur.fetchall()

        if books is None:
            return jsonify({'message': 'Books not found'}), 404

        return jsonify({'books': books})
    except Exception as e:
        print(e)
        return jsonify({'message': 'Error getting books', 'error': str(e)}), 404
    
def getBook_(id):
	try:
		cur.execute(f"SELECT * FROM users WHERE id = {id}")
		user = cur.fetchone() 
		if user is None:
			return jsonify({'message': 'User not found'}), 404
		return jsonify({'user': user})

	except Exception as e:
		return jsonify({'message': 'Error getting user', 'error': str(e)}), 404
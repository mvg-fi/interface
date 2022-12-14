export interface RegisteredUser {
	contract?: string;
	created_at: string;
	full_name: string;
	user_id: string;
	session_id: string;
	key: {
		client_id: string;
		private_key: string;
		session_id: string;
	};
}

export interface User extends RegisteredUser {
	address: `0x${string}`;
}
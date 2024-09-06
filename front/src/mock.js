import testImage1 from "./screens/testImage1.png";
import testImage3 from "./screens/testImage3.png";


export const initialStateGroups = {
	"currentPage": 1,
	"totalPages": 5,
	"totalItemCount": 50,
	"data": [
		{
			"id": '1',
			"name": "첫 번째 비공개 그룹",
			"imageUrl": "string",
			"isPublic": false,

			"likeCount": 0,
			"badgeCount": 0,
			"postCount": 0,
			"createdAt": "2024-02-22T07:47:49.803Z",
			"introduction": "수국은 풍성한 꽃송이와 다양한 색상으로 유명한 식물로, 꽃의 색은 토양의 pH에 따라 변합니다. 여름에 꽃을 피우며, 관상용으로 많이 사용됩니다.",
			"password": '1'
		},
		{
			"id": '2',
			"name": "두 번째 비공개 그룹",
			"imageUrl": "string",
			"isPublic": false,
			"likeCount": 0,
			"badgeCount": 0,
			"postCount": 0,
			"createdAt": "2024-02-22T07:47:49.803Z",
			"introduction": "설명 없음",
			"password": '2'
		},
		{
			"id": '3',
			"name": "첫 번째 공개 그룹",
			"imageUrl": testImage1,
			"isPublic": true,
			"likeCount": 0,
			"badgeCount": 0,
			"postCount": 0,
			"createdAt": "2024-02-22T07:47:49.803Z",
			"introduction": "수국은 풍성한 꽃송이와 다양한 색상으로 유명한 식물로, 꽃의 색은 토양의 pH에 따라 변합니다. 여름에 꽃을 피우며, 관상용으로 많이 사용됩니다.",
			"password": '3'
		},
		{
			"id": '4',
			"name": "세 번째 비공개 그룹",
			"imageUrl": "string",
			"isPublic": false,
			"likeCount": 0,
			"badgeCount": 0,
			"postCount": 0,
			"createdAt": "2024-02-22T07:47:49.803Z",
			"introduction": "설명 없음",
			"password": '3'
		},
		{
			"id": '5',
			"name": "네 번째 비공개 그룹",
			"imageUrl": "string",
			"isPublic": false,
			"likeCount": 0,
			"badgeCount": 0,
			"postCount": 0,
			"createdAt": "2024-02-22T07:47:49.803Z",
			"introduction": "설명 없음",
			"password": '3'
		},
		{
			"id": '6',
			"name": "다섯 번째 비공개 그룹",
			"imageUrl": "string",
			"isPublic": false,
			"likeCount": 0,
			"badgeCount": 0,
			"postCount": 0,
			"createdAt": "2024-02-22T07:47:49.803Z",
			"introduction": "설명 없음",
			"password": '3'
		},
		{
			"id": '7',
			"name": "여섯 번째 비공개 그룹",
			"imageUrl": "string",
			"isPublic": false,
			"likeCount": 0,
			"badgeCount": 0,
			"postCount": 0,
			"createdAt": "2024-02-22T07:47:49.803Z",
			"introduction": "설명 없음",
			"password": '3'
		},
		{
			"id": '8',
			"name": "일곱 번째 비공개 그룹",
			"imageUrl": "string",
			"isPublic": false,
			"likeCount": 0,
			"badgeCount": 0,
			"postCount": 0,
			"createdAt": "2024-02-22T07:47:49.803Z",
			"introduction": "설명 없음",
			"password": '3'
		},
		{
			"id": '9',
			"name": "두 번째 공개 그룹",
			"imageUrl": "string",
			"isPublic": true,
			"likeCount": 0,
			"badgeCount": 0,
			"postCount": 0,
			"createdAt": "2024-02-22T07:47:49.803Z",
			"introduction": "설명 없음",
			"password": '3'
		}
	],
}



export const initialStatePosts = {
	"currentPage": 1,
	"totalPages": 5,
	"totalItemCount": 50,
	"data": [
		{
		  	"id": 1,
			"nickname": "달봉이아빠",
			"title": "인천 낚시 여행",
			"imageUrl": testImage3,
			"tags": [ "여행", "낚시", "가족", "여행", "낚시", "가족", "여행", "낚시", "가족", "여행", "낚시", "가족", "여행", "낚시", "가족", "여행", "낚시", "가족" ],
			"location": "인천 앞바다",
			"moment": "2024-02-21",
			"isPublic": true,
			"likeCount": 0,
			"commentCount": 0,
			"createdAt": "2024-02-22T07:47:49.803Z"
		},
		{
		  	"id": 2,
			"nickname": "구정이엄마",
			"title": "비공개 포스트",
			"imageUrl": "string",
			"tags": [ "string", "string" ],
			"location": "string",
			"moment": "2024-02-21",
			"isPublic": false,
			"likeCount": 0,
			"commentCount": 0,
			"createdAt": "2024-02-22T07:47:49.803Z"
		},
		{
			"id": 3,
			"nickname": "철수아빠",
			"title": "공개 포스트",
			"imageUrl": "string",
			"tags": [ "string", "string" ],
			"location": "string",
			"moment": "2024-02-21",
			"isPublic": true,
			"likeCount": 0,
			"commentCount": 0,
			"createdAt": "2024-02-22T07:47:49.803Z"
	  },
	  {
			"id": 4,
			"nickname": "민지엄마",
			"title": "비공개 포스트",
			"imageUrl": "string",
			"tags": [ "string", "string" ],
			"location": "string",
			"moment": "2024-02-21",
			"isPublic": false,
			"likeCount": 0,
			"commentCount": 0,
			"createdAt": "2024-02-22T07:47:49.803Z"
	  },
	  {
			"id": 5,
			"nickname": "붕어",
			"title": "공개 포스트",
			"imageUrl": "string",
			"tags": [ "string", "string" ],
			"location": "string",
			"moment": "2024-02-21",
			"isPublic": true,
			"likeCount": 0,
			"commentCount": 0,
			"createdAt": "2024-02-22T07:47:49.803Z"
	},
	{
			"id": 6,
			"nickname": "고등어",
			"title": "비공개 포스트",
			"imageUrl": "string",
			"tags": [ "string", "string" ],
			"location": "ssstring",
			"moment": "2024-02-21",
			"isPublic": false,
			"likeCount": 0,
			"commentCount": 0,
			"createdAt": "2024-02-22T07:47:49.803Z"
	}
	],
}


export const initialStatePostDetails = {
	"id": 123,
		"groupId": 123,
		"nickname": "달봉이아들",
		"title": "인천 앞바다에서 무려 60cm 월척을 낚다!",
		"content": "인천 앞바다에서 월척을 낚았습니다! 일행들과 함께 환호성을 지르며 기념 사진을 찍었습니다. 인천 앞바다에서 월척을 낚았습니다! 일행들과 함께 환호성을 지르며 기념 사진을 찍었습니다. ",
		"imageUrl": testImage3,
		"tags": [ "여행", "낙시", "가족" ],
		"location": "인천 앞바다",
		"moment": "2024-02-21",
		"isPublic": true,
		"likeCount": 0,
		"commentCount": 0,
		"createdAt": "2024-02-22T07:47:49.803Z"
}
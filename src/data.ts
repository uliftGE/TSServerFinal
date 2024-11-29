// src/data.js
import { Book, Genre } from './@types/book';
export const books: Book[] = [
  {
    id: 1,
    title: '퇴근 후, 데이터로 읽는 세상',
    description:
      '데이터가 일상에서 어떻게 사용되는지 쉽고 재미있게 풀어낸 책. 회사의 매출 데이터부터 SNS에서의 트렌드 분석까지, 우리 주변에서 흔히 볼 수 있는 데이터를 활용하는 다양한 방법을 소개한다. 데이터 분석을 처음 접하는 사람들을 위해 친근한 예시와 실질적인 활용법을 중심으로 구성되었다. 이 책은 단순히 데이터를 분석하는 방법뿐 아니라, 데이터로 세상을 읽는 새로운 관점을 제시한다.',
    read: false,
    genre: Genre.SelfHelp,
    coverImage: 'http://localhost:4000/images/book1.webp',
    review: '',
  },
  {
    id: 2,
    title: '미로',
    description:
      '평범한 고등학생이었던 주인공은 어느 날 학교 도서관에서 이상한 지도를 발견한다. 지도에 표시된 방향대로 도시를 탐험하던 중, 주인공은 현실과는 다른 독특한 세계로 연결된 문을 발견하게 된다. 도시의 비밀을 풀기 위해 그는 새로운 동료들과 함께 퍼즐을 풀어나가며 점점 더 깊은 모험에 빠져든다. 현대적인 배경에 독특한 상상력이 결합된 이 소설은 독자에게 미스터리와 감동을 동시에 선사한다.',
    read: false,
    genre: Genre.Mystery,
    coverImage: 'http://localhost:4000/images/book2.webp',
    review: '',
  },
  {
    id: 3,
    title: '우연한 커피 한 잔',
    description:
      '직장 스트레스로 지친 여주인공은 어느 날 우연히 들어간 작은 카페에서 마음을 사로잡는 커피 한 잔과 함께 새로운 만남을 시작한다. 카페 주인이자 커피 아티스트인 남주인공과의 서투르지만 따뜻한 교감은 그녀의 일상에 작은 변화를 가져온다.하지만 두 사람의 관계가 깊어질수록 남주인공의 숨겨진 과거가 밝혀지며, 사랑과 현실 사이의 갈등이 시작된다. 달콤하면서도 현실적인 연애 이야기가 독자의 마음을 설레게 한다.',
    read: false,
    genre: Genre.Romance,
    coverImage: 'http://localhost:4000/images/book3.webp',
    review: '',
  },
];

export default books;


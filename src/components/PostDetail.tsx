export default function PostDetailComponent() {
  return (
    <>
      {" "}
      <div className="post_detail">
        <div className="post_box">
          <div className="post_title">3-4 네트워크: IP</div>
          <div className="post_profile-box">
            <div className="post_profile" />
            <div className="post_author-name">Zojo</div>
            <div className="post_date">2024.04</div>
          </div>
          <div className="post_utils-box">
            <div className="post_delete">삭제</div>
            <div className="post_edit">수정</div>
          </div>
          <div className="post_text">
            오랜만에 CS 내용을 가져왔습니다! 네트워크를 구성하는 대표 프로토콜인
            IP에 대해서 알아보겠습니다. IP의 정의 IP(Internet Protocol)의 주된
            역할은 데이터 패킷을 목적지까지 안전하게 전달하는 것입니다. 데이터
            패킷이란, 전송이 용이하도록 작은 단위로 분할된 데이터를 말합니다.
            이러한 분할은 대용량 데이터 전송 시 발생할 수 있는 문제를
            최소화하고, 전송 경로가 혼잡할 경우 대안적 경로를 선택할 수 있도록
            함으로써 네트워크 효율성을 높입니다. 다만, IP 자체는 패킷의 손실이나
            중복 등을 관리하지 않습니다. IP의 구조 IP 주소는 전 세계 컴퓨터가
            서로를 구별하고 소통할 수 있도록 돕는 구분자 역할을 합니다. 주로
            네트워크 부분과 호스트 부분으로 구분됩니다. 네트워크 부분 네트워크
            부분은 해당 컴퓨터가 속한 네트워크를 식별하는데 사용됩니다. IP
            주소의 앞부분에 위치합니다. 호스트 부분 호스트 부분은 네트워크
            내에서 특정 컴퓨터를 찾기 위해 사용됩니다. 네트워크 부분 다음에
            위치합니다. IP 주소 고갈 문제 1980년대 IP가 처음 도입될 때는 주로
            대학이나 연구소에서만 사용되어 문제가 되지 않았습니다. 그러나
            1990년대 이후 개인용 컴퓨터, 스마트폰, 태블릿, IoT 기기의 보급이
            가속화되면서 IP 주소가 부족해지기 시작했습니다. 이 문제를 해결하기
            위한 몇 가지 방법이 있습니다. 1. CIDR (Classless Inter-Domain
            Routing) CIDR은 IP 주소를 네트워크 부분과 호스트 부분으로 더
            세밀하게 나눌 수 있도록 하여, 필요한 만큼의 호스트 주소를 할당받을
            수 있게 해줍니다. 이를 통해 사용자들은 필요한 호스트 개수만큼만
            사용할 수 있으며 부족한 IP 주소도 더 효율적으로 활용할 수 있습니다.
            2. DHCP (Dynamic Host Configuration Protocol) IP가 필요한 컴퓨터에
            자동으로 IP 주소를 할당해서 사용하게 해주고, 사용하지 않으면 IP
            주소를 반환받아 다른 컴퓨터가 사용할 수 있게 해주는 프로토콜입니다.
            즉 동적으로 IP주소를 부여하고 관리하는 역할을 합니다. 3. 사설 IP와
            NAT 사설 IP는 특정 네트워크 내에서만 사용되는 주소로, 네트워크
            외부와의 통신에는 공인 IP가 사용됩니다. NAT(Network Address
            Translation) 기술은 내부 네트워크의 사설 IP를 외부 통신 가능한 공인
            IP로 변환합니다. NAT는 필요한 경우에만 공인 IP를 사용하도록 하여 IP
            자원을 효율적으로 관리합니다. 이는 공인 IP의 낭비를 줄이고, 내부
            네트워크의 주소 체계를 외부로부터 숨겨 보안을 강화합니다. 따라서
            NAT는 IP 할당의 효율성을 높이는 동시에, 네트워크 보안을 향상시키는
            중요한 역할을 합니다. 이상으로 IP의 기본적인 정의와 구조, 그리고
            주소 고갈 문제에 대응하기 위한 기술들에 대해 알아보았습니다. 이러한
            기술들은 인터넷의 지속적인 성장과 발전을 지원하며, 효율적이고 안전한
            네트워크 환경을 구축하는 데 필수적입니다.
          </div>
        </div>
      </div>
    </>
  );
}

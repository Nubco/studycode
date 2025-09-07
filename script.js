// DOMContentLoaded 이벤트는 HTML 문서가 완전히 로드되고 분석되었을 때 발생합니다.
// HTML 요소들을 조작하기 전에 모든 요소가 준비되었는지 확인하는 가장 안전한 방법입니다.
document.addEventListener('DOMContentLoaded', function() {
    
    // ------------------------------------------------------------------
    // 1단계: HTML 요소 찾아오기
    // ------------------------------------------------------------------
    const homeLink = document.getElementById('home-link');
    const problemsNav = document.getElementById('problems-nav');
    const communityNav = document.getElementById('community-nav');

    const problemListView = document.getElementById('problem-list-view');
    const communityListView = document.getElementById('community-list-view');
    
    const allViews = [problemListView, communityListView];

    // ------------------------------------------------------------------
    // 2단계: 페이지(뷰)를 보여주는 기능 만들기
    // ------------------------------------------------------------------
    function showView(viewToShow) {
        allViews.forEach(view => {
            view.classList.add('hidden');
        });
        viewToShow.classList.remove('hidden');
    }

    // ------------------------------------------------------------------
    // 3단계: 메뉴 클릭 이벤트에 기능 연결하기
    // ------------------------------------------------------------------
    homeLink.addEventListener('click', function(event) {
        event.preventDefault(); 
        showView(problemListView); 
    });

    problemsNav.addEventListener('click', function(event) {
        event.preventDefault();
        showView(problemListView); 
    });

    communityNav.addEventListener('click', function(event) {
        event.preventDefault();
        showView(communityListView); 
    });
    
    // ------------------------------------------------------------------
    // 초기화: 웹사이트가 처음 열렸을 때 기본으로 보여줄 페이지를 설정합니다.
    showView(problemListView);
    // ------------------------------------------------------------------
});

/* script.js
   A simple in-browser demo: keeps posts in memory and in localStorage.
   Features: render posts grid, search, create post modal, recent/popular/categories widgets, pagination.
*/

const POSTS_PER_PAGE = 6;
let posts = [];           // array of post objects
let filtered = [];        // results after search
let page = 1;

// A small set of demo posts (you can add more or edit)
const seedPosts = [
  {
    id: createId(),
    title: "Discover Your Inner Genius To Better",
    excerpt: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...",
    content: "Full article content for Discover Your Inner Genius To Better.",
    coverImage: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=60",
    tags: ["travel"],
    author: "Ewrin Jonson",
    createdAt: new Date('2021-03-23').toISOString(),
    views: 62
  },
  {
    id: createId(),
    title: "Read This To Change How You Mind",
    excerpt: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...",
    content: "Full article content for Read This To Change How You Mind.",
    coverImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=60",
    tags: ["thinking"],
    author: "Ewrin Jonson",
    createdAt: new Date('2021-03-23').toISOString(),
    views: 51
  },
  {
    id: createId(),
    title: "Smart People Think To Get Ahead",
    excerpt: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...",
    content: "Full article content for Smart People Think To Get Ahead.",
    coverImage: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=60",
    tags: ["thinking"],
    author: "Ewrin Jonson",
    createdAt: new Date('2021-03-23').toISOString(),
    views: 51
  },
  {
    id: createId(),
    title: "One Simple Word To Success",
    excerpt: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...",
    content: "Full article content for One Simple Word To Success.",
    coverImage: "https://images.unsplash.com/photo-1482192505345-5655af888cc4?auto=format&fit=crop&w=1200&q=60",
    tags: ["success"],
    author: "Ewrin Jonson",
    createdAt: new Date('2021-03-23').toISOString(),
    views: 45
  },
  {
    id: createId(),
    title: "How To Improve The Way You Skills",
    excerpt: "Short tips to improve skills and prepare before important days.",
    content: "Full article content for How To Improve The Way You Skills.",
    coverImage: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=60",
    tags: ["lifestyle"],
    author: "Ewrin Jonson",
    createdAt: new Date('2021-03-23').toISOString(),
    views: 31
  }
];

// Util: create small unique id
function createId(){ return Math.random().toString(36).slice(2,9) }

// Load posts from localStorage or seed
function loadPosts(){
  const raw = localStorage.getItem('demo_posts_v1');
  if(raw){
    try{
      posts = JSON.parse(raw);
    }catch(e){
      posts = seedPosts.slice();
    }
  } else {
    posts = seedPosts.slice();
    savePosts();
  }
  // sort newest first
  posts.sort((a,b)=> new Date(b.createdAt) - new Date(a.createdAt));
  filtered = posts.slice();
}

// Save posts
function savePosts(){
  localStorage.setItem('demo_posts_v1', JSON.stringify(posts));
}

// Render posts grid (with pagination)
function renderPosts(){
  const container = document.getElementById('postsGrid');
  container.innerHTML = ''; // clear

  const start = (page-1)*POSTS_PER_PAGE;
  const pageItems = filtered.slice(start, start + POSTS_PER_PAGE);

  if(pageItems.length === 0){
    container.innerHTML = `<p style="color:#666">No posts found.</p>`;
    updatePageInfo();
    renderWidgets();
    return;
  }

  pageItems.forEach(p => {
    const card = document.createElement('article');
    card.className = 'post-card';
    card.innerHTML = `
      <a class="thumb" href="#" data-id="${p.id}">
        <img src="${escapeHtml(p.coverImage || placeholder())}" alt="${escapeHtml(p.title)}" loading="lazy">
      </a>
      <div class="post-body">
        <div style="display:flex;justify-content:space-between;align-items:start">
          <div style="font-size:12px;color:#fff;background:#fff;padding:0;border-radius:6px"></div>
          <div style="font-size:12px;color:#777">${p.tags[0] || ''}</div>
        </div>

        <h3><a href="#" class="open-post" data-id="${p.id}">${escapeHtml(p.title)}</a></h3>
        <p class="excerpt">${escapeHtml(p.excerpt)}</p>
        <div class="meta-row">By ${escapeHtml(p.author)} • ${new Date(p.createdAt).toLocaleDateString()} • ${p.views} views</div>
      </div>
    `;
    container.appendChild(card);
  });

  // add click handlers for open post images/links
  container.querySelectorAll('.open-post, .thumb').forEach(el=>{
    el.addEventListener('click', e=>{
      e.preventDefault();
      const id = el.dataset.id;
      openPostModal(id);
    });
  });

  updatePageInfo();
  renderWidgets();
}

// Update page info and prev/next buttons
function updatePageInfo(){
  const pageInfo = document.getElementById('pageInfo');
  const totalPages = Math.max(1, Math.ceil(filtered.length / POSTS_PER_PAGE));
  pageInfo.textContent = `Page ${page} of ${totalPages}`;
  document.getElementById('prevPage').disabled = page <= 1;
  document.getElementById('nextPage').disabled = page >= totalPages;
}

// Widgets: popular, recent, categories
function renderWidgets(){
  // popular: top by views (3)
  const popular = posts.slice().sort((a,b)=> b.views - a.views).slice(0,3);
  const popularList = document.getElementById('popularList');
  popularList.innerHTML = popular.map(p => `
    <div class="popular-item" style="display:flex;gap:12px;margin-bottom:12px">
      <img src="${escapeHtml(p.coverImage||placeholder())}" alt="${escapeHtml(p.title)}" style="width:100%;max-height:100px;object-fit:cover;border-radius:6px">
      <div style="flex:1">
        <div style="font-size:13px;font-weight:600">${escapeHtml(p.title)}</div>
        <div style="font-size:12px;color:#888;margin-top:6px">${new Date(p.createdAt).toLocaleDateString()}</div>
      </div>
    </div>
  `).join('');

  // recent
  const recentList = document.getElementById('recentList');
  const recent = posts.slice(0,5);
  recentList.innerHTML = recent.map(p => `
    <li><img src="${escapeHtml(p.coverImage||placeholder())}" alt=""><div>
      <div style="font-size:13px">${escapeHtml(p.title)}</div>
      <div style="font-size:12px;color:#888">${new Date(p.createdAt).toLocaleDateString()}</div>
    </div></li>
  `).join('');

  // categories
  const catMap = posts.reduce((m,p)=>{
    p.tags.forEach(t=>{
      m[t] = (m[t]||0)+1;
    });
    return m;
  }, {});
  const categories = Object.keys(catMap).sort();
  const categoryList = document.getElementById('categoryList');
  categoryList.innerHTML = categories.length ? categories.map(c => `<li>${escapeHtml(cap(c))} <span style="color:#888">(${catMap[c]})</span></li>`).join('') : '<li>All <span style="color:#888">(0)</span></li>';
}

// Open a simple modal to view a single post (native alert for simplicity)
function openPostModal(id){
  const post = posts.find(p=>p.id===id);
  if(!post) return alert('Post not found');
  // increment views and save
  post.views = (post.views||0) + 1;
  savePosts();
  renderPosts();
  const content = `
${post.title}\nBy ${post.author} • ${new Date(post.createdAt).toLocaleDateString()}
\n\n${post.content}
  `;
  // Use a simple window.open to show content in a new tab (better than alert for long text)
  const w = window.open('', '_blank', 'noopener,noreferrer');
  w.document.title = post.title;
  w.document.body.style.fontFamily = 'system-ui,Segoe UI,Roboto,Arial';
  w.document.body.style.padding = '24px';
  w.document.body.innerHTML = `
    <h1>${escapeHtml(post.title)}</h1>
    <p style="color:#666">By ${escapeHtml(post.author)} • ${new Date(post.createdAt).toLocaleDateString()} • ${post.views} views</p>
    <img src="${escapeHtml(post.coverImage||placeholder())}" style="width:100%;max-width:900px;border-radius:8px;margin:12px 0" alt="">
    <div style="white-space:pre-line">${escapeHtml(post.content)}</div>
  `;
}

// Search
function runSearch(q){
  if(!q){
    filtered = posts.slice();
  } else {
    const term = q.trim().toLowerCase();
    filtered = posts.filter(p=>{
      return (p.title || '').toLowerCase().includes(term)
          || (p.excerpt || '').toLowerCase().includes(term)
          || (p.content || '').toLowerCase().includes(term)
          || (p.tags || []).some(t=>t.toLowerCase().includes(term));
    });
  }
  page = 1;
  renderPosts();
}

// Create post modal handling
function showModal(){ document.getElementById('modal').classList.remove('hidden') }
function hideModal(){ document.getElementById('modal').classList.add('hidden') }

function wireEvents(){
  document.getElementById('createBtn').addEventListener('click', ()=> showModal());
  document.getElementById('closeModal').addEventListener('click', ()=> hideModal());
  document.getElementById('cancelModal').addEventListener('click', ()=> hideModal());
  document.getElementById('searchInput').addEventListener('input', (e)=> {
    runSearch(e.target.value);
  });

  document.getElementById('createForm').addEventListener('submit', (ev)=>{
    ev.preventDefault();
    const form = ev.target;
    const fd = new FormData(form);
    const newPost = {
      id: createId(),
      title: fd.get('title') || 'Untitled',
      excerpt: fd.get('excerpt') || '',
      content: fd.get('content') || '',
      coverImage: fd.get('coverImage') || placeholder(),
      tags: (fd.get('tags') || '').split(',').map(s=>s.trim()).filter(Boolean),
      author: 'Demo Author',
      createdAt: new Date().toISOString(),
      views: 0
    };
    posts.unshift(newPost);
    savePosts();
    filtered = posts.slice();
    form.reset();
    hideModal();
    page = 1;
    renderPosts();
  });

  document.getElementById('prevPage').addEventListener('click', ()=>{
    if(page>1){ page--; renderPosts() }
  });
  document.getElementById('nextPage').addEventListener('click', ()=>{
    const max = Math.ceil(filtered.length / POSTS_PER_PAGE);
    if(page < max){ page++; renderPosts() }
  });

  // keyboard: Escape closes modal
  window.addEventListener('keydown', (e)=> {
    if(e.key === 'Escape'){ hideModal() }
  });
}

// Placeholder image (data URI or unsplash backup)
function placeholder(){
  return 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=1000&q=60';
}

// small helper: escape HTML
function escapeHtml(s=''){ return String(s).replace(/[&<>"']/g, function(m){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m] }) }

// cap
function cap(s=''){ return s.charAt(0).toUpperCase()+s.slice(1) }

// boot
function init(){
  loadPosts();
  wireEvents();
  renderPosts();
}

init();

// ═══════════════════════════════════════════════════════
// SHARED DATA STORE (shared via localStorage)
// ═══════════════════════════════════════════════════════

const USERS = {
  student:    { name: 'Aliyah Rahmawati',  role: 'student',     nim: '20210001', major: 'Informatics', email: 'aliyah@university.ac.id',  color: '#4f8aff' },
  student2:   { name: 'Bima Prasetyo',     role: 'student',     nim: '20210045', major: 'Informatics', email: 'bima@university.ac.id',    color: '#7c5cfc' },
  student3:   { name: 'Citra Dewi',        role: 'student',     nim: '20210089', major: 'Business',    email: 'citra@university.ac.id',   color: '#00d4aa' },
  pic:        { name: 'Dr. Hendra Wijaya', role: 'pic',         nim: null,       major: 'Informatics', email: 'hendra@university.ac.id',  color: '#ff8c42' },
  faculty:    { name: 'Prof. Sari Lestari',role: 'faculty',     nim: null,       major: null,          email: 'sari@university.ac.id',    color: '#ff5c6a' },
  superadmin: { name: 'Admin Sistem',      role: 'superadmin',  nim: null,       major: null,          email: 'admin@university.ac.id',   color: '#ffb547' },
};

const DEFAULT_COMPETITIONS = [
  {
    id: 'COMP-2024-001', name: 'GEMASTIK XVII – System Development', organizer: 'Kemdikbud',
    level: 'national', category: 'Technology', dateStart: '2024-10-15', dateEnd: '2024-10-18',
    members: ['20210001','20210045','20210089'], leader: '20210001',
    proposalLink: 'https://drive.google.com/xxx', funding: 5000000, exemption: true,
    status: 'faculty_approved', letterGenerated: true, submittedAt: '2024-09-01',
    picNote: '', facultyNote: '', major: 'Informatics', submittedBy: 'student',
    achievement: { result: 'Winner', certificate: true, documentation: true, reportedAt: '2024-10-25' },
    history: [
      { status:'submitted', date:'2024-09-01', actor:'Aliyah Rahmawati' },
      { status:'pic_approved', date:'2024-09-03', actor:'Dr. Hendra Wijaya' },
      { status:'faculty_approved', date:'2024-09-05', actor:'Prof. Sari Lestari' },
      { status:'letter_generated', date:'2024-09-05', actor:'System' },
    ]
  },
  {
    id: 'COMP-2024-002', name: 'IEEE ICEEM 2024 – Research Paper', organizer: 'IEEE',
    level: 'international', category: 'Research', dateStart: '2024-11-20', dateEnd: '2024-11-22',
    members: ['20210045'], leader: '20210045',
    proposalLink: 'https://drive.google.com/yyy', funding: 12000000, exemption: true,
    status: 'submitted', letterGenerated: false, submittedAt: '2024-09-10',
    picNote: '', facultyNote: '', major: 'Informatics', submittedBy: 'student2', achievement: null,
    history: [{ status:'submitted', date:'2024-09-10', actor:'Bima Prasetyo' }]
  },
  {
    id: 'COMP-2024-003', name: 'Business Plan Competition UNPAD', organizer: 'Universitas Padjadjaran',
    level: 'regional', category: 'Business', dateStart: '2024-10-05', dateEnd: '2024-10-06',
    members: ['20210089'], leader: '20210089',
    proposalLink: 'https://drive.google.com/zzz', funding: 2000000, exemption: false,
    status: 'completed', letterGenerated: false, submittedAt: '2024-08-20',
    picNote: '', facultyNote: '', major: 'Business', submittedBy: 'student3',
    achievement: { result: 'Finalist', certificate: true, documentation: true, reportedAt: '2024-10-15' },
    history: [
      { status:'submitted', date:'2024-08-20', actor:'Citra Dewi' },
      { status:'pic_approved', date:'2024-08-22', actor:'Dr. Hendra Wijaya' },
      { status:'faculty_approved', date:'2024-08-24', actor:'Prof. Sari Lestari' },
      { status:'completed', date:'2024-10-15', actor:'Citra Dewi' },
    ]
  },
  {
    id: 'COMP-2024-004', name: 'Hackathon Go Digital Indonesia', organizer: 'Kominfo',
    level: 'national', category: 'Technology', dateStart: '2024-12-10', dateEnd: '2024-12-12',
    members: ['20210001','20210045'], leader: '20210001',
    proposalLink: '', funding: 3500000, exemption: true,
    status: 'draft', letterGenerated: false, submittedAt: null,
    picNote: '', facultyNote: '', major: 'Informatics', submittedBy: 'student', achievement: null, history: []
  },
  {
    id: 'COMP-2024-005', name: 'LKTI Nasional Kedokteran 2024', organizer: 'UI',
    level: 'national', category: 'Research', dateStart: '2024-11-05', dateEnd: '2024-11-07',
    members: ['20210001'], leader: '20210001',
    proposalLink: 'https://drive.google.com/aaa', funding: 4000000, exemption: true,
    status: 'pic_rejected', letterGenerated: false, submittedAt: '2024-09-15',
    picNote: 'Dokumen pendukung belum lengkap.', facultyNote: '', major: 'Informatics', submittedBy: 'student', achievement: null,
    history: [
      { status:'submitted', date:'2024-09-15', actor:'Aliyah Rahmawati' },
      { status:'pic_rejected', date:'2024-09-17', actor:'Dr. Hendra Wijaya', note:'Dokumen pendukung belum lengkap.' },
    ]
  },
  {
    id: 'COMP-2024-006', name: 'PKM-KC Nasional 2024', organizer: 'Kemdikbud',
    level: 'national', category: 'Technology', dateStart: '2024-12-01', dateEnd: '2024-12-03',
    members: ['20210001','20210089'], leader: '20210001',
    proposalLink: 'https://drive.google.com/bbb', funding: 6000000, exemption: true,
    status: 'pic_approved', letterGenerated: false, submittedAt: '2024-10-01',
    picNote: '', facultyNote: '', major: 'Informatics', submittedBy: 'student', achievement: null,
    history: [
      { status:'submitted', date:'2024-10-01', actor:'Aliyah Rahmawati' },
      { status:'pic_approved', date:'2024-10-03', actor:'Dr. Hendra Wijaya' },
    ]
  },
];

// ── NOTIFICATION SYSTEM ──────────────────────────────────
function getNotifReadSet() {
  try { return new Set(JSON.parse(localStorage.getItem('ct_notif_read') || '[]')); }
  catch { return new Set(); }
}

function saveNotifReadSet(set) {
  localStorage.setItem('ct_notif_read', JSON.stringify([...set]));
}

function relativeTime(dateStr) {
  if (!dateStr) return '';
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);
  if (mins < 2) return 'Just now';
  if (mins < 60) return `${mins} minutes ago`;
  if (hours < 24) return `${hours} hour${hours>1?'s':''} ago`;
  if (days < 7) return `${days} day${days>1?'s':''} ago`;
  return new Date(dateStr).toLocaleDateString('en-GB', { day:'numeric', month:'short' });
}

function generateNotifications(competitions) {
  const notifs = [];
  competitions.forEach(comp => {
    comp.history.forEach(h => {
      const id = `${comp.id}-${h.status}-${h.date}`;
      const base = { id, compId: comp.id, date: h.date, time: relativeTime(h.date) };

      if (h.status === 'submitted') {
        notifs.push({ ...base, icon:'📋',
          title: `New submission: "${comp.name}" is awaiting PIC review`,
          for: ['pic', 'superadmin'], link: 'approvals.html' });
        notifs.push({ ...base + '-s', icon:'📝',
          title: `Your submission "${comp.name}" has been sent for review`,
          for: ['student'], link: 'submissions.html' });
      }
      if (h.status === 'pic_approved') {
        notifs.push({ ...base, icon:'✅',
          title: `"${comp.name}" was PIC approved — awaiting Faculty review`,
          for: ['faculty', 'superadmin'], link: 'faculty-review.html' });
        notifs.push({ ...base, id: id+'-s', icon:'✅',
          title: `Your submission "${comp.name}" was approved by PIC`,
          for: ['student'], link: 'submissions.html' });
      }
      if (h.status === 'pic_rejected') {
        notifs.push({ ...base, icon:'❌',
          title: `Your submission "${comp.name}" was rejected by PIC${h.note ? ': ' + h.note : ''}`,
          for: ['student'], link: 'submissions.html' });
        notifs.push({ ...base, id: id+'-a', icon:'❌',
          title: `"${comp.name}" was rejected at PIC stage`,
          for: ['superadmin'], link: 'all-submissions.html' });
      }
      if (h.status === 'faculty_approved') {
        notifs.push({ ...base, icon:'🎉',
          title: `"${comp.name}" received Faculty approval!`,
          for: ['student'], link: 'submissions.html' });
        notifs.push({ ...base, id: id+'-a', icon:'🎉',
          title: `Faculty approved "${comp.name}"`,
          for: ['pic', 'superadmin'], link: 'all-submissions.html' });
      }
      if (h.status === 'faculty_rejected') {
        notifs.push({ ...base, icon:'❌',
          title: `Your submission "${comp.name}" was rejected by Faculty${h.note ? ': ' + h.note : ''}`,
          for: ['student'], link: 'submissions.html' });
      }
      if (h.status === 'letter_generated') {
        notifs.push({ ...base, icon:'📄',
          title: `Exemption letter generated for "${comp.name}"`,
          for: ['student', 'faculty', 'superadmin'], link: 'submissions.html' });
      }
      if (h.status === 'completed') {
        notifs.push({ ...base, icon:'🏅',
          title: `Achievement report submitted for "${comp.name}"`,
          for: ['student', 'faculty', 'superadmin'], link: 'achievement.html' });
      }
    });
  });
  return notifs.sort((a, b) => new Date(b.date) - new Date(a.date));
}

function getMyNotifications(user) {
  const competitions = getCompetitions();
  const all = generateNotifications(competitions);
  return all.filter(n => n.for.includes(user.role));
}

function getUnreadCount(user) {
  const readSet = getNotifReadSet();
  return getMyNotifications(user).filter(n => !readSet.has(n.id)).length;
}

// ── USER REGISTRY (registered accounts) ──────────────────
function getRegisteredUsers() {
  try {
    const s = localStorage.getItem('ct_registered_users');
    return s ? JSON.parse(s) : {};
  } catch { return {}; }
}

function saveRegisteredUsers(users) {
  localStorage.setItem('ct_registered_users', JSON.stringify(users));
}

// ── ACTIVITY LOG ─────────────────────────────────────────
function getActivityLog() {
  try {
    const s = localStorage.getItem('ct_activity_log');
    return s ? JSON.parse(s) : [];
  } catch { return []; }
}

function logActivity(action, detail, user) {
  const log = getActivityLog();
  const actor = user || getCurrentUser();
  log.push({
    timestamp: new Date().toISOString(),
    user: actor ? actor.name : 'Unknown',
    email: actor ? actor.email : '—',
    role: actor ? roleLabel(actor.role) : '—',
    action,
    detail
  });
  // Keep last 500 entries
  if (log.length > 500) log.splice(0, log.length - 500);
  localStorage.setItem('ct_activity_log', JSON.stringify(log));
}

function registerUser(data) {
  // data: { name, email, password, nim, major, role }
  const registered = getRegisteredUsers();
  if (registered[data.email]) return { ok: false, error: 'Email already registered' };
  // Check built-in demo users too
  const demoConflict = Object.values(USERS).find(u => u.email === data.email);
  if (demoConflict) return { ok: false, error: 'Email already registered' };

  const colors = ['#4f8aff','#7c5cfc','#00d4aa','#ff8c42','#ff5c6a','#ffb547'];
  const color = colors[Math.floor(Math.random() * colors.length)];
  const user = { name: data.name, email: data.email, password: data.password,
    nim: data.nim || null, major: data.major || null,
    role: data.role || 'student', color };
  registered[data.email] = user;
  saveRegisteredUsers(registered);
  logActivity('Account Registered', `New ${roleLabel(user.role)} account created`, user);
  return { ok: true, user };
}

function findUser(email, password) {
  // Check demo built-ins first
  const demo = Object.values(USERS).find(u => u.email === email);
  if (demo && password === 'password') {
    logActivity('Login', `Signed in via email`, demo);
    return demo;
  }
  // Check registered users
  const registered = getRegisteredUsers();
  const found = registered[email];
  if (found && found.password === password) {
    logActivity('Login', `Signed in via email`, found);
    return found;
  }
  return null;
}

// ── STORAGE HELPERS ──────────────────────────────────────
function getCompetitions() {
  try {
    const s = localStorage.getItem('ct_competitions');
    return s ? JSON.parse(s) : JSON.parse(JSON.stringify(DEFAULT_COMPETITIONS));
  } catch { return JSON.parse(JSON.stringify(DEFAULT_COMPETITIONS)); }
}

function saveCompetitions(list) {
  localStorage.setItem('ct_competitions', JSON.stringify(list));
}

function getCurrentUser() {
  try {
    const s = localStorage.getItem('ct_user');
    return s ? JSON.parse(s) : null;
  } catch { return null; }
}

function setCurrentUser(user) {
  localStorage.setItem('ct_user', JSON.stringify(user));
}

function getUserKey(user) {
  return Object.keys(USERS).find(k => USERS[k].name === user.name) || 'student';
}

// ── HELPERS ──────────────────────────────────────────────
function statusLabel(s) {
  return {
    draft:'Draft', submitted:'Submitted', pic_approved:'PIC Approved',
    pic_rejected:'PIC Rejected', faculty_approved:'Faculty Approved',
    faculty_rejected:'Faculty Rejected', letter_generated:'Letter Generated',
    completed:'Completed'
  }[s] || s;
}

function roleLabel(r) {
  return { student:'Student', pic:'PIC Major', faculty:'Faculty Admin', superadmin:'Super Admin' }[r] || r;
}

function memberName(nim) {
  const u = Object.values(USERS).find(u => u.nim === nim);
  return u ? u.name : nim;
}

function requireAuth(allowedRoles) {
  const user = getCurrentUser();
  if (!user) { window.location.href = 'auth.html'; return null; }
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    window.location.href = 'dashboard.html';
    return null;
  }
  return user;
}

function logout() {
  logActivity('Logout', 'User signed out');
  localStorage.removeItem('ct_user');
  window.location.href = 'index.html';
}

// ── SIDEBAR BUILDER ───────────────────────────────────────
const NAV_CONFIG = {
  student: [
    { section:'Main', items:[
      { icon:'📊', label:'Dashboard',         href:'dashboard.html' },
      { icon:'📝', label:'My Submissions',    href:'submissions.html', badge:1 },
      { icon:'🏅', label:'Achievement Report',href:'achievement.html' },
      { icon:'🔔', label:'Notifications',     href:'notifications.html', badge:2 },
    ]},
  ],
  pic: [
    { section:'Main', items:[
      { icon:'📊', label:'Dashboard',         href:'dashboard.html' },
      { icon:'📋', label:'Pending Approvals', href:'approvals.html', badge:1 },
      { icon:'📁', label:'All Submissions',   href:'all-submissions.html' },
      { icon:'🔔', label:'Notifications',     href:'notifications.html', badge:1 },
    ]},
  ],
  faculty: [
    { section:'Main', items:[
      { icon:'📊', label:'Dashboard',         href:'dashboard.html' },
      { icon:'📋', label:'Faculty Review',    href:'faculty-review.html', badge:1 },
      { icon:'📁', label:'All Submissions',   href:'all-submissions.html' },
      { icon:'🔔', label:'Notifications',     href:'notifications.html' },
    ]},
    { section:'Reports', items:[
      { icon:'📈', label:'Analytics',         href:'analytics.html' },
      { icon:'📤', label:'Export Data',       href:'export.html' },
    ]},
  ],
  superadmin: [
    { section:'Main', items:[
      { icon:'📊', label:'Dashboard',         href:'dashboard.html' },
      { icon:'📁', label:'All Submissions',   href:'all-submissions.html' },
      { icon:'👥', label:'User Management',   href:'users.html' },
      { icon:'🔔', label:'Notifications',     href:'notifications.html' },
    ]},
    { section:'Reports', items:[
      { icon:'📈', label:'Analytics',         href:'analytics.html' },
      { icon:'📤', label:'Export Data',       href:'export.html' },
    ]},
  ],
};

function buildSidebar(activePage, user) {
  const sections = NAV_CONFIG[user.role] || [];
  const unreadCount = getUnreadCount(user);
  const navHTML = sections.map(sec => `
    <div class="nav-section">
      <div class="nav-section-label">${sec.section}</div>
      ${sec.items.map(item => {
        const isNotif = item.href === 'notifications.html';
        const badgeVal = isNotif ? unreadCount : item.badge;
        return `
        <a class="nav-item ${item.href === activePage ? 'active' : ''}" href="${item.href}">
          <span class="nav-icon">${item.icon}</span>
          ${item.label}
          ${badgeVal ? `<span class="badge">${badgeVal}</span>` : ''}
        </a>`;
      }).join('')}
    </div>
  `).join('');

  const initials = user.name.charAt(0);
  return `
    <aside class="sidebar">
      <a class="sidebar-header" href="dashboard.html">
        <div class="sidebar-logo">🏆</div>
        <span class="sidebar-name">CompTrack</span>
      </a>
      <nav>${navHTML}</nav>
      <div class="sidebar-footer">
        <div class="user-info">
          <div class="user-avatar" style="background:${user.color}">${initials}</div>
          <div class="user-detail">
            <div class="user-name">${user.name}</div>
            <div class="user-role">${roleLabel(user.role)}</div>
          </div>
          <button class="logout-btn" onclick="logout()" title="Logout">⏻</button>
        </div>
      </div>
    </aside>`;
}

// ── TOAST ─────────────────────────────────────────────────
function toast(msg, type = 'info') {
  const icons = { success:'✅', error:'❌', info:'ℹ️' };
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const el = document.createElement('div');
  el.className = `toast ${type}`;
  el.innerHTML = `<span>${icons[type]||'ℹ️'}</span><span>${msg}</span>`;
  container.appendChild(el);
  setTimeout(() => el.classList.add('show'), 10);
  setTimeout(() => { el.classList.remove('show'); setTimeout(() => el.remove(), 300); }, 3500);
}

// ── MODAL ─────────────────────────────────────────────────
function openModal(title, body, footer = '') {
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-body').innerHTML = body;
  document.getElementById('modal-footer').innerHTML = footer;
  document.getElementById('modal-overlay').classList.add('open');
}
function closeModal(e) {
  if (e.target === document.getElementById('modal-overlay')) closeModalDirect();
}
function closeModalDirect() {
  document.getElementById('modal-overlay').classList.remove('open');
}

// ── MODAL HTML ─────────────────────────────────────────────
const MODAL_HTML = `
<div class="modal-overlay" id="modal-overlay" onclick="closeModal(event)">
  <div class="modal" id="modal">
    <div class="modal-header">
      <h3 class="modal-title" id="modal-title"></h3>
      <button class="modal-close" onclick="closeModalDirect()">✕</button>
    </div>
    <div class="modal-body" id="modal-body"></div>
    <div class="modal-footer" id="modal-footer"></div>
  </div>
</div>`;

// ── FILE UPLOAD HELPER ───────────────────────────────────
function buildFileUploadField(id, label) {
  return `
  <div class="form-group">
    <label>${label}</label>
    <div class="file-drop-zone" id="drop-${id}" onclick="document.getElementById('${id}').click()"
      ondragover="event.preventDefault();this.classList.add('drag-over')"
      ondragleave="this.classList.remove('drag-over')"
      ondrop="handleFileDrop(event,'${id}')">
      <input type="file" id="${id}" accept=".pdf,.jpg,.jpeg,.png" style="display:none"
        onchange="handleFileSelect(this,'drop-${id}')">
      <div class="file-drop-icon">📎</div>
      <div class="file-drop-text">Click or drag file here</div>
      <div class="file-drop-sub">PDF, JPG, PNG accepted</div>
    </div>
    <div class="file-preview" id="preview-${id}" style="display:none"></div>
  </div>`;
}

function handleFileSelect(input, zoneId) {
  const file = input.files[0];
  if (!file) return;
  const zone = document.getElementById(zoneId);
  if (zone) zone.style.display = 'none';
  const previewId = 'preview-' + input.id;
  const preview = document.getElementById(previewId);
  if (preview) {
    preview.style.display = 'flex';
    preview.innerHTML = `
      <div class="file-preview-icon">${file.name.endsWith('.pdf') ? '📄' : '🖼️'}</div>
      <div class="file-preview-info">
        <div class="file-preview-name">${file.name}</div>
        <div class="file-preview-size">${(file.size/1024).toFixed(1)} KB</div>
      </div>
      <button class="file-preview-remove" onclick="removeFile('${input.id}','${zoneId}')">✕</button>`;
  }
}

function handleFileDrop(event, inputId) {
  event.preventDefault();
  const zoneEl = event.currentTarget;
  zoneEl.classList.remove('drag-over');
  const file = event.dataTransfer.files[0];
  if (!file) return;
  const input = document.getElementById(inputId);
  // Assign dropped file to input (DataTransfer trick)
  const dt = new DataTransfer();
  dt.items.add(file);
  input.files = dt.files;
  handleFileSelect(input, 'drop-' + inputId);
}

function removeFile(inputId, zoneId) {
  const input = document.getElementById(inputId);
  if (input) input.value = '';
  const zone = document.getElementById(zoneId);
  if (zone) zone.style.display = '';
  const preview = document.getElementById('preview-' + inputId);
  if (preview) { preview.style.display = 'none'; preview.innerHTML = ''; }
}

// ── SHARED DETAIL VIEW ────────────────────────────────────
function viewDetail(id, user) {
  const competitions = getCompetitions();
  const comp = competitions.find(c => c.id === id);
  if (!comp) return;

  const canPICApprove  = user.role === 'pic' && comp.status === 'submitted';
  const canFacultyAct  = (user.role === 'faculty' || user.role === 'superadmin') && comp.status === 'pic_approved';

  openModal(comp.name, `
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:20px">
    ${[
      ['Competition ID', comp.id],
      ['Organizer', comp.organizer],
      ['Level', `<span class="level-badge level-${comp.level}">${comp.level}</span>`],
      ['Category', comp.category],
      ['Start Date', comp.dateStart],
      ['End Date', comp.dateEnd],
      ['Funding Request', `IDR ${comp.funding.toLocaleString()}`],
      ['Exemption', comp.exemption ? '✅ Required' : 'Not required'],
      ['Status', `<span class="status status-${comp.status}">${statusLabel(comp.status)}</span>`],
      ['Major', comp.major],
    ].map(([k,v]) => `
    <div>
      <div style="font-size:11px;color:var(--text3);text-transform:uppercase;letter-spacing:.06em;margin-bottom:3px">${k}</div>
      <div style="font-size:13px;color:var(--text)">${v}</div>
    </div>`).join('')}
  </div>
  <div style="margin-bottom:20px">
    <div style="font-size:11px;color:var(--text3);text-transform:uppercase;letter-spacing:.06em;margin-bottom:6px">Team Members</div>
    <div class="member-tags">
      ${comp.members.map(nim => `<div class="member-tag">${memberName(nim)} ${nim===comp.leader?'👑':''}</div>`).join('')}
    </div>
  </div>
  ${comp.proposalLink ? `<div style="margin-bottom:20px">
    <div style="font-size:11px;color:var(--text3);text-transform:uppercase;margin-bottom:4px">Proposal</div>
    <a href="${comp.proposalLink}" target="_blank" style="color:var(--accent);font-size:13px">${comp.proposalLink}</a>
  </div>` : ''}
  ${comp.picNote ? `<div style="margin-bottom:16px;background:rgba(255,92,106,0.1);border:1px solid rgba(255,92,106,0.3);border-radius:8px;padding:12px">
    <div style="font-size:11px;color:var(--danger);margin-bottom:4px;font-weight:600">PIC REJECTION NOTE</div>
    <div style="font-size:13px;color:var(--text2)">${comp.picNote}</div>
  </div>` : ''}
  ${comp.achievement ? `<div style="margin-bottom:16px;background:rgba(46,204,138,0.1);border:1px solid rgba(46,204,138,0.3);border-radius:8px;padding:12px">
    <div style="font-size:11px;color:var(--success);margin-bottom:4px;font-weight:600">ACHIEVEMENT</div>
    <div style="font-size:13px;color:var(--text)">${comp.achievement.result} · Reported: ${comp.achievement.reportedAt}</div>
  </div>` : ''}
  <div>
    <div style="font-size:11px;color:var(--text3);text-transform:uppercase;letter-spacing:.06em;margin-bottom:10px">Status History</div>
    <div class="timeline">
      ${comp.history.map((h,i) => `
      <div class="timeline-item ${i<comp.history.length-1?'done':'current'} ${h.status.includes('rejected')?'rejected':''}">
        <div class="timeline-label">${statusLabel(h.status)} — ${h.actor}</div>
        <div class="timeline-date">${h.date}${h.note?' · '+h.note:''}</div>
      </div>`).join('')}
    </div>
  </div>`,
  `${canPICApprove ? `
    <button class="btn btn-ghost" onclick="closeModalDirect()">Close</button>
    <button class="btn btn-danger btn-sm" onclick="closeModalDirect();openRejectModal('${id}','pic')">Reject</button>
    <button class="btn btn-success" onclick="doApprove('${id}','pic')">PIC Approve</button>
  ` : canFacultyAct ? `
    <button class="btn btn-ghost" onclick="closeModalDirect()">Close</button>
    <button class="btn btn-danger btn-sm" onclick="closeModalDirect();openRejectModal('${id}','faculty')">Reject</button>
    <button class="btn btn-success" onclick="doApprove('${id}','faculty')">Faculty Approve ${comp.exemption?'+ Letter':''}</button>
  ` : `
    ${comp.letterGenerated ? `<button class="btn btn-accent" onclick="closeModalDirect();downloadLetter('${id}')">📄 Download Letter</button>` : ''}
    <button class="btn btn-ghost" onclick="closeModalDirect()">Close</button>
  `}`);
}

function doApprove(id, type) {
  const user = getCurrentUser();
  const competitions = getCompetitions();
  const comp = competitions.find(c => c.id === id);
  if (!comp) return;
  const date = new Date().toISOString().slice(0,10);
  if (type === 'pic') {
    comp.status = 'pic_approved';
    comp.history.push({ status:'pic_approved', date, actor: user.name });
    logActivity('PIC Approved', `Approved submission: ${comp.name} (${id})`);
    toast('Submission PIC Approved ✓', 'success');
  } else {
    comp.status = 'faculty_approved';
    comp.history.push({ status:'faculty_approved', date, actor: user.name });
    if (comp.exemption) {
      comp.letterGenerated = true;
      comp.history.push({ status:'letter_generated', date, actor:'System' });
      logActivity('Faculty Approved + Letter', `Approved & generated exemption letter: ${comp.name} (${id})`);
    } else {
      logActivity('Faculty Approved', `Approved submission: ${comp.name} (${id})`);
    }
    toast(`Faculty Approved! ${comp.exemption?'Exemption letter generated ✓':''}`, 'success');
  }
  saveCompetitions(competitions);
  closeModalDirect();
  if (typeof renderPage === 'function') renderPage();
}

function openRejectModal(id, type) {
  const label = type === 'pic' ? 'PIC' : 'Faculty';
  openModal(`Reject Submission (${label})`, `
  <p style="color:var(--text2);margin-bottom:16px">Provide a reason for rejection. The student will be notified.</p>
  <div class="form-group">
    <label>Rejection Notes *</label>
    <textarea id="reject-note" placeholder="e.g. Supporting documents are incomplete..."></textarea>
  </div>`,
  `<button class="btn btn-ghost" onclick="closeModalDirect()">Cancel</button>
   <button class="btn btn-danger" onclick="doReject('${id}','${type}')">Confirm Reject</button>`);
}

function doReject(id, type) {
  const user = getCurrentUser();
  const note = document.getElementById('reject-note')?.value;
  if (!note) { toast('Please provide rejection notes', 'error'); return; }
  const competitions = getCompetitions();
  const comp = competitions.find(c => c.id === id);
  if (!comp) return;
  const date = new Date().toISOString().slice(0,10);
  if (type === 'pic') {
    comp.status = 'pic_rejected';
    comp.picNote = note;
  } else {
    comp.status = 'faculty_rejected';
    comp.facultyNote = note;
  }
  comp.history.push({ status: comp.status, date, actor: user.name, note });
  logActivity(type === 'pic' ? 'PIC Rejected' : 'Faculty Rejected', `Rejected submission: ${comp.name} (${id}) — "${note}"`);
  saveCompetitions(competitions);
  closeModalDirect();
  toast('Submission rejected with notes', 'info');
  if (typeof renderPage === 'function') renderPage();
}

function downloadLetter(id) {
  const competitions = getCompetitions();
  const comp = competitions.find(c => c.id === id);
  if (!comp) return;
  const leader = Object.values(USERS).find(u => u.nim === comp.leader);
  const today = new Date().toLocaleDateString('id-ID', { day:'numeric', month:'long', year:'numeric' });
  const nomorSurat = `UXY/FTI/DISP/${comp.id.replace('COMP-','')}/${new Date().getFullYear()}`;

  // Show preview modal with real download button
  openModal('Surat Exemption – ' + comp.id, `
  <div class="pdf-preview">
    <div class="pdf-header">
      <div class="pdf-logo-text">UNIVERSITAS XYZ</div>
      <div class="pdf-subtitle">Fakultas Teknologi dan Informatika</div>
      <div class="pdf-subtitle">Jl. Universitas No. 1, Kota ABC, Indonesia</div>
    </div>
    <div class="pdf-title">SURAT DISPENSASI MAHASISWA</div>
    <div class="pdf-number">Nomor: ${nomorSurat}</div>
    <div class="pdf-body">
      <p>Yang bertanda tangan di bawah ini, Dekan Fakultas Teknologi dan Informatika Universitas XYZ, dengan ini memberikan exemption kepada:</p>
      <table style="width:100%;margin-bottom:16px;font-size:13px">
        <tr><td style="width:160px">Nama</td><td>: <span class="pdf-underline">${leader?.name||comp.leader}</span></td></tr>
        <tr><td>NIM</td><td>: <span class="pdf-underline">${comp.leader}</span></td></tr>
        <tr><td>Program Studi</td><td>: <span class="pdf-underline">${comp.major}</span></td></tr>
        <tr><td>Kegiatan</td><td>: <span class="pdf-underline">${comp.name}</span></td></tr>
        <tr><td>Penyelenggara</td><td>: <span class="pdf-underline">${comp.organizer}</span></td></tr>
        <tr><td>Tanggal</td><td>: <span class="pdf-underline">${comp.dateStart} s.d. ${comp.dateEnd}</span></td></tr>
      </table>
      <p>Mahasiswa yang bersangkutan diizinkan untuk tidak menghadiri perkuliahan selama kegiatan berlangsung. Mahasiswa diwajibkan untuk berkoordinasi dengan dosen pengampu masing-masing mata kuliah.</p>
      <p>Demikian exemption letter ini dibuat untuk dapat dipergunakan sebagaimana mestinya.</p>
    </div>
    <div class="pdf-sig">
      <div>
        <div>${today}</div>
        <div>Dekan Fakultas Teknologi dan Informatika</div>
        <div class="pdf-sig-line">Prof. Sari Lestari, Ph.D.<br>NIP. 123456789</div>
      </div>
    </div>
  </div>`,
  `<button class="btn btn-ghost" onclick="closeModalDirect()">Tutup</button>
   <button class="btn btn-primary" onclick="generatePDF('${id}')">⬇ Download PDF</button>`);
}

function generatePDF(id) {
  const competitions = getCompetitions();
  const comp = competitions.find(c => c.id === id);
  if (!comp) return;

  // Load jsPDF dynamically if not yet loaded
  function doGenerate() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });

    const pageW = 210;
    const marginL = 25;
    const marginR = 25;
    const contentW = pageW - marginL - marginR;
    const leader = Object.values(USERS).find(u => u.nim === comp.leader);
    const leaderName = leader?.name || comp.leader;
    const today = new Date().toLocaleDateString('id-ID', { day:'numeric', month:'long', year:'numeric' });
    const nomorSurat = `UXY/FTI/DISP/${comp.id.replace('COMP-','')}/${new Date().getFullYear()}`;

    let y = 18;

    // ── HEADER ──
    doc.setFont('times', 'bold');
    doc.setFontSize(16);
    doc.text('UNIVERSITAS XYZ', pageW / 2, y, { align: 'center' });
    y += 7;

    doc.setFont('times', 'normal');
    doc.setFontSize(11);
    doc.text('Fakultas Teknologi dan Informatika', pageW / 2, y, { align: 'center' });
    y += 5;
    doc.text('Jl. Universitas No. 1, Kota ABC, Indonesia · Telp. (021) 000-0000', pageW / 2, y, { align: 'center' });
    y += 6;

    // Header line double
    doc.setLineWidth(1);
    doc.line(marginL, y, pageW - marginR, y);
    y += 1;
    doc.setLineWidth(0.3);
    doc.line(marginL, y, pageW - marginR, y);
    y += 10;

    // ── JUDUL ──
    doc.setFont('times', 'bold');
    doc.setFontSize(13);
    doc.text('SURAT DISPENSASI MAHASISWA', pageW / 2, y, { align: 'center' });
    y += 6;

    doc.setFont('times', 'normal');
    doc.setFontSize(11);
    doc.text(`Nomor: ${nomorSurat}`, pageW / 2, y, { align: 'center' });
    y += 12;

    // ── PEMBUKA ──
    doc.setFontSize(11);
    const pembuka = 'Yang bertanda tangan di bawah ini, Dekan Fakultas Teknologi dan Informatika Universitas XYZ, dengan ini memberikan exemption kepada:';
    const pembukaLines = doc.splitTextToSize(pembuka, contentW);
    doc.text(pembukaLines, marginL, y);
    y += pembukaLines.length * 6 + 6;

    // ── DATA MAHASISWA ──
    const labelX = marginL + 5;
    const colonX = marginL + 50;
    const valueX = marginL + 55;
    const rows = [
      ['Nama',          leaderName],
      ['NIM',           comp.leader],
      ['Program Studi', comp.major],
      ['Kegiatan',      comp.name],
      ['Penyelenggara', comp.organizer],
      ['Tanggal',       `${comp.dateStart} s.d. ${comp.dateEnd}`],
    ];

    rows.forEach(([label, value]) => {
      doc.setFont('times', 'normal');
      doc.setFontSize(11);
      doc.text(label, labelX, y);
      doc.text(':', colonX, y);
      // underline value
      const valLines = doc.splitTextToSize(value, contentW - 55);
      doc.text(valLines, valueX, y);
      // draw underline under value
      const valW = doc.getTextWidth(valLines[0]);
      doc.setLineWidth(0.2);
      doc.line(valueX, y + 1, valueX + Math.min(valW + 4, contentW - 55), y + 1);
      y += valLines.length * 6 + 2;
    });

    y += 8;

    // ── ISI SURAT ──
    const isi1 = 'Mahasiswa yang bersangkutan diizinkan untuk tidak menghadiri perkuliahan selama kegiatan berlangsung. Mahasiswa diwajibkan untuk berkoordinasi dengan dosen pengampu masing-masing mata kuliah.';
    const isi1Lines = doc.splitTextToSize(isi1, contentW);
    doc.text(isi1Lines, marginL, y);
    y += isi1Lines.length * 6 + 6;

    const isi2 = 'Demikian exemption letter ini dibuat untuk dapat dipergunakan sebagaimana mestinya.';
    const isi2Lines = doc.splitTextToSize(isi2, contentW);
    doc.text(isi2Lines, marginL, y);
    y += isi2Lines.length * 6 + 16;

    // ── TANDA TANGAN ──
    const sigX = pageW - marginR - 60;
    doc.text(today, sigX, y, { align: 'center' });
    y += 6;
    doc.text('Dekan Fakultas Teknologi dan Informatika', sigX, y, { align: 'center' });
    y += 36; // space untuk tanda tangan

    doc.setFont('times', 'bold');
    doc.text('Prof. Sari Lestari, Ph.D.', sigX, y, { align: 'center' });
    doc.setFont('times', 'normal');
    y += 5;
    doc.text('NIP. 123456789', sigX, y, { align: 'center' });

    // Line above name
    doc.setLineWidth(0.3);
    doc.line(sigX - 45, y - 10, sigX + 45, y - 10);

    // ── SAVE ──
    const filename = `Surat-Exemption-${comp.id}-${comp.leader}.pdf`;
    doc.save(filename);
    toast('Surat Exemption berhasil didownload! 📄', 'success');
    closeModalDirect();
  }

  if (window.jspdf) {
    doGenerate();
  } else {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
    script.onload = doGenerate;
    script.onerror = () => toast('Gagal memuat library PDF. Periksa koneksi internet.', 'error');
    document.head.appendChild(script);
  }
}
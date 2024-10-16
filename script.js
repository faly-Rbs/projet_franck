
// Données exemple
const users = [
    { id: 1, name: "falimanana", email: "faly@gmail.com", role: "Admin", status: "Actif" },
    { id: 2, name: "franck", email: "franck@gmail.com", role: "Utilisateur", status: "Inactif" }
];

const files = [
    { id: 22, name: "202406-00011.pdf", path: "670f4723097a6.pdf", size: 1024, date: "2024-10-16 07:54:59", user: "test1", email: "test1@alabri.net" },
    { id: 23, name: "chart.png", path: "670f61ad2bb83.png", size: 2048, date: "2024-10-16 09:48:13", user: "test", email: "test@alabri.net" },
    { id: 24, name: "RE-P5-LAN.pdf", path: "670f61c335ede.pdf", size: 3072, date: "2024-10-16 09:48:35", user: "test", email: "test@alabri.net" },
    { id: 25, name: "202406-00011.pdf", path: "670f661be4cc4.pdf", size: 4096, date: "2024-10-14 10:07:07", user: "test", email: "test@alabri.net" }
];

// Fonction pour mettre à jour les statistiques du tableau de bord
function updateDashboardStats() {
    document.getElementById('totalUsers').textContent = users.length;
    document.getElementById('totalFiles').textContent = files.length;
    const totalSpace = files.reduce((acc, file) => acc + file.size, 0);
    document.getElementById('usedSpace').textContent = `${(totalSpace / 1024).toFixed(2)} Mo`;
}

// Fonction pour remplir le tableau des utilisateurs
function populateUserTable() {
    const userTable = document.getElementById('userTable');
    userTable.innerHTML = users.map(user => `
        <tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.role}</td>
            <td>${user.status}</td>
            <td><button class="btn">Modifier</button></td>
        </tr>
    `).join('');
}

// Fonction pour remplir le tableau des fichiers
function populateFileTable() {
    const fileTable = document.getElementById('fileTable');
    fileTable.innerHTML = files.map(file => `
        <tr>
            <td>${file.id}</td>
            <td>${file.name}</td>
            <td>${file.path}</td>
            <td>${file.size}</td>
            <td>${file.date}</td>
            <td>${file.user}</td>
            <td>${file.email}</td>
            <td><button class="btn">Supprimer</button></td>
        </tr>
    `).join('');
}

// Fonction pour créer le graphique d'approbation des membres
function createApprovalChart() {
    const ctx = document.getElementById('approvalChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
            datasets: [{
                label: 'Approbations des membres',
                data: [12, 19, 3, 5, 2, 3],
                borderColor: 'rgb(41, 128, 185)',
                backgroundColor: 'rgba(41, 128, 185, 0.2)',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Courbe d\'approbation des membres',
                    font: {
                        size: 18,
                        weight: 'bold'
                    }
                },
                legend: {
                    labels: {
                        font: {
                            size: 14
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    }
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Appeler les fonctions pour initialiser la page
updateDashboardStats();
populateUserTable();
populateFileTable();
createApprovalChart();

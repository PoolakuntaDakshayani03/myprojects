<script>
    async function fetchData() {
        const response = await fetch('http://localhost:5000/api/internships');
        const data = await response.json();

        let container = document.createElement("div");
        data.forEach(intern => {
            let item = document.createElement("p");
            item.innerText = `${intern.company} - ${intern.role} (${intern.location})`;
            container.appendChild(item);
        });

        document.body.appendChild(container);
    }

    fetchData();
</script>

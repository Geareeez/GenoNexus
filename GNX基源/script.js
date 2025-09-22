// 等待页面加载完成
document.addEventListener("DOMContentLoaded", function () {
  // 获取搜索框元素
  const searchInput = document.getElementById("geneSearch");

  // 可选：添加搜索按钮点击事件
  const searchButton = document.getElementById("searchButton");
  searchButton.addEventListener("click", function () {
    const searchTerm =
      searchInput.value === defaultText ? "" : searchInput.value.trim();
    if (searchTerm) {
      // 这里可以添加实际搜索逻辑
      console.log("搜索内容:", searchTerm);
      // 例如：window.location.href = 'search-results.html?query=' + encodeURIComponent(searchTerm);
    } else {
      alert("请输入基因名称后再搜索");
    }
  });

  // 可选：支持回车键搜索
  searchInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      searchButton.click();
    }
  });
});
const navItems = document.querySelectorAll(".nav-item");

navItems.forEach((item) => {
  // 检查是否有下拉菜单，如果没有则创建一个示例
  let dropdown = item.querySelector(".dropdown-menu");
  if (!dropdown) {
    // 创建下拉菜单容器
    dropdown = document.createElement("ul");
    dropdown.className = "dropdown-menu";
    dropdown.style.display = "none"; // 默认隐藏

    // 添加示例菜单项（实际使用时可根据需要修改）
    const menuItems = ["选项1", "选项2", "选项3"];
    menuItems.forEach((menuItem) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = "#";
      a.className = "dropdown-link";
      a.textContent = menuItem;
      li.appendChild(a);
      dropdown.appendChild(li);
    });

    item.appendChild(dropdown);
  }

  // 鼠标悬停显示下拉菜单
  item.addEventListener("mouseenter", function () {
    dropdown.style.display = "block";
    // 添加淡入动画效果
    setTimeout(() => {
      dropdown.style.opacity = "1";
      dropdown.style.transform = "translateY(0)";
    }, 10);
  });

  // 鼠标离开隐藏下拉菜单
  item.addEventListener("mouseleave", function () {
    // 添加淡出动画效果
    dropdown.style.opacity = "0";
    dropdown.style.transform = "translateY(-10px)";

    setTimeout(() => {
      dropdown.style.display = "none";
    }, 300);
  });
  // 为每个导航项添加下拉菜单功能
  const navItems = document.querySelectorAll(".nav-item");

  navItems.forEach((item) => {
    // 检查是否有下拉菜单，如果没有则创建一个示例
    let dropdown = item.querySelector(".dropdown-menu");
    if (!dropdown) {
      // 创建下拉菜单容器
      dropdown = document.createElement("ul");
      dropdown.className = "dropdown-menu";
      dropdown.style.display = "none"; // 默认隐藏

      // 添加示例菜单项（实际使用时可根据需要修改）
      const menuItems = ["选项1", "选项2", "选项3"];
      menuItems.forEach((menuItem) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = "#";
        a.className = "dropdown-link";
        a.textContent = menuItem;
        li.appendChild(a);
        dropdown.appendChild(li);
      });

      item.appendChild(dropdown);
    }

    // 鼠标悬停显示下拉菜单
    item.addEventListener("mouseenter", function () {
      dropdown.style.display = "block";
      // 添加淡入动画效果
      setTimeout(() => {
        dropdown.style.opacity = "1";
        dropdown.style.transform = "translateY(0)";
      }, 10);
    });

    // 鼠标离开隐藏下拉菜单
    item.addEventListener("mouseleave", function () {
      // 添加淡出动画效果
      dropdown.style.opacity = "0";
      dropdown.style.transform = "translateY(-10px)";

      setTimeout(() => {
        dropdown.style.display = "none";
      }, 300);
    });
  });
});

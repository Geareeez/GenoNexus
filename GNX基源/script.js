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
// 导航栏交互逻辑
document.addEventListener('DOMContentLoaded', function() {
    // 获取导航元素
    const mainNavItem = document.getElementById('compoundAnalysis');
    const subNav = document.getElementById('compoundSubNav');
    const arrow = mainNavItem.querySelector('.arrow');
    const subNavItems = document.querySelectorAll('.sub-nav-item');
    const queryTypeSelect = document.getElementById('queryType');
    
    // 主导航点击事件 - 展开/折叠子导航
    mainNavItem.addEventListener('click', function() {
        subNav.classList.toggle('active');
        arrow.classList.toggle('rotate');
    });
    
    // 子导航项点击事件 - 切换查询类型
    subNavItems.forEach(item => {
        if (!item.classList.contains('placeholder')) {
            item.addEventListener('click', function() {
                const type = this.getAttribute('data-type');
                // 更新下拉框选中状态
                queryTypeSelect.value = type;
                // 更新搜索框提示文字
                updateSearchPlaceholder(type);
            });
        }
    });
    
    // 下拉框变化时更新搜索框提示
    queryTypeSelect.addEventListener('change', function() {
        updateSearchPlaceholder(this.value);
    });
    
    // 更新搜索框占位符文本
    function updateSearchPlaceholder(type) {
        const searchInput = document.getElementById('geneSearch');
        switch(type) {
            case 'cell':
                searchInput.placeholder = "请输入细胞名称";
                break;
            case 'gene':
                searchInput.placeholder = "请输入基因名称";
                break;
            case 'compound':
                searchInput.placeholder = "请输入化合物名称";
                break;
        }
    }
});
    
# PHP Login System

A native PHP authentication system with RBAC.

## Features
- **多种登录方式**: Username, Email, or Phone.
- **注册**: 提供注册
- **安全校验**: 
    - CSRF 
    - XSS 过滤
    - 密码哈希 Hashing (Bcrypt)
    - 记录日志
- **角色**: Admin 和 User.
- **CSS 样式**: with TailwindCSS.

## Setup

1. **数据库**
   - sql/init.sql
   - Config is in `config/database.php`.

2. **运行测试**
   Start the built-in PHP development server:
   ```bash
   php -S localhost:8000 -t public
   ```

3. **登录测试**
   - **Admin**: 
     - Username: `admin`
     - Password: `admin`
   - **User**: 注册即可.

## Structure
- `public/`: Web 目录.
- `src/`: 后端 (Auth, Database, Utils).
- `templates/`: 页面部分.
- `sql/`: 数据库 schema.
- `config/`: 配置文件.

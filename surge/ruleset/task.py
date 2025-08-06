from pathlib import Path

# 文件路径
main_file = 'global.list'
other_files = ['apple_cdn.list', 'apple_direct.list']  # 可扩展更多文件

# 读取 a.txt 中的所有行，保留注释行，剔除空行
with open(main_file, 'r', encoding='utf-8') as f:
    main_lines = [line.rstrip('\n') for line in f if line.strip()]

# 构建其他文件中非注释行的集合
other_lines = set()
for file in other_files:
    if Path(file).exists():
        with open(file, 'r', encoding='utf-8') as f:
            for line in f:
                stripped = line.strip()
                if stripped and not stripped.startswith('#'):
                    other_lines.add(stripped)

# 过滤 main_lines：如果是注释行，保留；如果不是且出现在其他文件中，则删除
filtered_lines = [
    line for line in main_lines
    if line.strip().startswith('#') or line.strip() not in other_lines
]

# 覆盖写入 a.txt（或另存为新文件）
with open(main_file, 'w', encoding='utf-8') as f:
    for line in filtered_lines:
        f.write(line + '\n')
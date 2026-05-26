from pathlib import Path

p = Path('public/Jack_Wong_Resume.pdf')
text = b'BT\n/F1 24 Tf\n72 720 Td\n(Jack Wong Resume) Tj\n0 -32 Td\n/F1 14 Tf\n(Jack Wong is a skilled Full Stack Developer with experience building modern web applications.) Tj\nET\n'
content = (
    b'%PDF-1.4\n'
    b'1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n'
    b'2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n'
    b'3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>\nendobj\n'
    b'4 0 obj\n<< /Length ' + str(len(text)).encode() + b' >>\nstream\n' + text + b'endstream\nendobj\n'
    b'5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n'
)
xref_start = len(content)
content += b'xref\n0 6\n0000000000 65535 f \n'
for obj in [b'1 0 obj', b'2 0 obj', b'3 0 obj', b'4 0 obj', b'5 0 obj']:
    offset = content.find(obj)
    content += f'{offset:010d} 00000 n \n'.encode()
content += b'trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n' + str(xref_start).encode() + b'\n%%EOF\n'
p.write_bytes(content)
print('created', p, 'size', p.stat().st_size)

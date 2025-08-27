import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: Voice-to-Code Generator',
  description: '```json
[
  {
    "title": "Voice-Driven Debugging Assistant",
    "description": "أداة تستخدم الأوامر الصوتية لمساعدة المطورين في تحديد الأخطاء في الشيفرة البرمجية وإصلاحها.",
    "mvp_plan": "إنشاء واجهة بسيطة تستقبل الأوامر الصوتية، وتربطها بأدوات تصحيح الأخطاء الشائعة مثل Chrome DevTools. يمكن استخدام مكتبات التعرف على الصوت مثل Google Speech API."
  },
  {
    "title": "Voice-Activated API Builder",
    "description": "أداة تسمح للمستخدمين بإنشاء واجهات برمجة التطبيقات (APIs) عبر الأوامر الصوتية، مما يسهل على المطورين إنشاء خدمات جديدة بسرعة.",
    "mvp_plan": "تطوير واجهة مستخدم بسيطة مع نظام التعرف على الصوت، حيث يمكن للمستخدمين إدخال تفاصيل API المطلوبة، مثل النقاط النهائية والطرق، وتحويلها إلى شيفرة باستخدام مكتبات مثل Express.js."
  },
  {
    "title": "Voice-Enabled Code Review Tool",
    "description": "أداة تتيح للمطورين إجراء مراجعات للكود باستخدام الأوامر الصوتية، مما يسهل التواصل بين الفرق.",
    "mvp_plan": "إنشاء منصة بسيطة تسمح للمستخدمين بإدخال تعليقات على الشيفرة البرمجية عبر الصوت، مع إمكانية دمجها مع أدوات مثل GitHub لتسهيل عملية المراجعة."
  }
]
```',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  )
}
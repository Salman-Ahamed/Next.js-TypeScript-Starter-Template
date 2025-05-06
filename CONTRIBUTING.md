# কন্ট্রিবিউটিং গাইডলাইন

## প্রজেক্ট সেটআপ

1. **প্রজেক্ট ক্লোন করুন**:

   ```bash
   git clone https://github.com/Baitul-Hikmah/Get-Ilmi.git
   cd Get-Ilmi
   ```

2. **ডিপেন্ডেন্সি ইনস্টল করুন**:

   ```bash
   bun install
   ```

3. **ডেভেলপমেন্ট সার্ভার চালু করুন**:
   ```bash
   bun run dev
   ```

## কোড স্টাইল এবং ফরম্যাটিং

### ESLint কনফিগারেশন

আমাদের প্রজেক্টে ESLint ব্যবহার করা হয়েছে কোড কোয়ালিটি এবং কনসিস্টেন্সি নিশ্চিত করার জন্য। নিচে আমাদের ESLint কনফিগারেশনের বিস্তারিত বর্ণনা দেওয়া হল:

```json
{
  "extends": ["next/core-web-vitals", "plugin:@typescript-eslint/recommended"],
  "rules": {
    "react/function-component-definition": [
      "error",
      {
        "namedComponents": "arrow-function",
        "unnamedComponents": "arrow-function"
      }
    ],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_",
        "caughtErrorsIgnorePattern": "^_"
      }
    ],
    "no-restricted-syntax": ["error", "FunctionDeclaration", "FunctionExpression"]
  }
}
```

#### কোডিং স্টাইল গাইডলাইন:

1. **কম্পোনেন্ট লিখার নিয়ম**:

   ```typescript
   import { FC } from "react";

   // ✅ সঠিক উদাহরণ
   interface Props {
     name: string;
     age: number;
   }

   const UserProfile: FC<Props> = ({ name, age }) => {
     return (
       <div>
         <h1>{name}</h1>
         <p>Age: {age}</p>
       </div>
     );
   };

   // ❌ ভুল উদাহরণ
   const UserProfile = (props) => {
     return (
       <div>
         <h1>{props.name}</h1>
         <p>Age: {props.age}</p>
       </div>
     );
   };
   ```

2. **টাইপস্ক্রিপ্ট টাইপ ব্যবহার**:

   ```typescript
   // ✅ সঠিক উদাহরণ
   type UserRole = "admin" | "user" | "guest";
   interface User {
     id: string;
     name: string;
     role: UserRole;
   }

   // ❌ ভুল উদাহরণ
   const user = {
     id: "123",
     name: "John",
     role: "admin", // any টাইপ এড়িয়ে চলুন
   };
   ```

3. **ফাংশন লিখার নিয়ম**:

   ```typescript
   // ✅ সঠিক উদাহরণ
   const calculateTotal = (items: Item[]): number => {
     return items.reduce((sum, item) => sum + item.price, 0);
   };

   // ❌ ভুল উদাহরণ
   function calculateTotal(items) {
     let sum = 0;
     for (let i = 0; i < items.length; i++) {
       sum += items[i].price;
     }
     return sum;
   }
   ```

## কোড সাবমিট করার প্রসেস

1. নতুন ব্রাঞ্চ তৈরি করুন:

   ```bash
   git checkout -b issueNo-your-feature-name
   ```

2. কোড পরিবর্তন করুন এবং কমিট করুন:

   ```bash
   git add .
   git commit -m "feat: your feature description"
   ```

3. কোড লিন্ট এবং ফরম্যাট চেক করুন:

   ```bash
   bun run lint
   bun run lint:fix
   ```

4. পুল রিকোয়েস্ট তৈরি করুন

## বেস্ট প্র্যাকটিস

1. **কোড রিভিউ**:

   - ছোট ছোট কমিট করুন
   - স্পষ্ট কমিট মেসেজ লিখুন
   - PR ডেসক্রিপশনে পরিবর্তনগুলো বিস্তারিত লিখুন

2. **টেস্টিং**:

   - নতুন ফিচার এর জন্য টেস্ট লিখুন
   - সব টেস্ট পাস হওয়া নিশ্চিত করুন

3. **ডকুমেন্টেশন**:
   - নতুন ফিচার এর জন্য ডকুমেন্টেশন আপডেট করুন
   - কোড কমেন্ট লিখুন যেখানে প্রয়োজন

## সাহায্য চাইতে

যদি কোন সমস্যা থাকে বা সাহায্য প্রয়োজন হয়:

1. GitHub Issues এ নতুন ইস্যু খুলুন
2. টিম মেম্বারদের সাথে সরাসরি যোগাযোগ করুন

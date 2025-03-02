"use client";

interface HistoryItem {
  id: string;
  template: string;
  aiResponse: string;
  createdAt: string;
  wordCount: number;
}

export default function ClientHistoryTable({
  historyItems,
}: {
  historyItems: HistoryItem[];
}) {
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const truncateText = (text: string, maxLength: number = 100) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="table-header">Template</th>
            <th className="table-header">AI Resp</th>
            <th className="table-header">Date</th>
            <th className="table-header">Words</th>
            <th className="table-header">Copy</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {historyItems.length === 0 ? (
            <tr>
              <td colSpan={5} className="px-6 py-4 text-center">
                No history items found
              </td>
            </tr>
          ) : (
            historyItems.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    {item.template === "Write Code" ? (
                      <div className="flex items-center">
                        <span className="bg-blue-100 p-1 rounded mr-2">💻</span>
                        <span>Write Code</span>
                      </div>
                    ) : item.template === "Instagram Hash Tag Generator" ? (
                      <div className="flex items-center">
                        <span className="bg-orange-100 p-1 rounded mr-2">
                          #️⃣
                        </span>
                        <span>Instagram Hash Tag Generator</span>
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <span className="bg-yellow-100 p-1 rounded mr-2">
                          📝
                        </span>
                        <span>Blog Topic Ideas</span>
                      </div>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900">
                    {truncateText(item.aiResponse)}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{item.createdAt}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{item.wordCount}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    className="text-blue-600 hover:text-blue-800"
                    onClick={() => handleCopy(item.aiResponse)}
                  >
                    Copy
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

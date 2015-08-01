using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WindowsFormsApplication1
{
	public partial class Form1 : Form
	{
		Dictionary<DateTime, DateTime> arr = new Dictionary<DateTime, DateTime>();
		Dictionary<DateTime, DateTime> slot = new Dictionary<DateTime, DateTime>();
		public Form1()
		{
			InitializeComponent();
		}

		private void button1_Click(object sender, EventArgs e)
		{
			if (textBox1.Text != "" && textBox2.Text != null)
			{
				var from = Convert.ToDateTime(textBox1.Text);
				var to = Convert.ToDateTime(textBox2.Text);
				if (!arr.ContainsKey(from))
					arr.Add(from, to);
			}
			else
			{
				MessageBox.Show("Enter From and To time Properly.");
			}
		}

		private void button2_Click(object sender, EventArgs e)
		{
			var a = arr.OrderBy(d => d.Key);
			arr = a.ToDictionary(d => d.Key, d => d.Value);
			var i = 0;
			var j = 0;
			while (i < arr.Count)
			{
				for (j = i; j < arr.Count-1; j++)
				{
					if (arr.ElementAt(j).Key >= arr.ElementAt(i).Value && arr.ElementAt(i).Value <= arr.ElementAt(j).Value)
					{
						break;
					}
				}
				slot.Add(arr.ElementAt(i).Key, arr.ElementAt(j).Value);
				j++;
				i = j;
			}

			foreach (var row in slot)
			{
				textBox3.AppendText(row.Key.ToString("HH:mm") + " To " + row.Value.ToString("HH:mm"));
				textBox3.AppendText(Environment.NewLine);
			}
		}
	}
}

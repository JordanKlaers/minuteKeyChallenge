<template>
	<table>
		<thead>
			<tr>
				<th
					v-for="(header, index) in tableData.tableHeaders" 
					:key="`header-column-${index}`">
					{{header}}
				</th>
			</tr>
		</thead>
		<tbody>
			<tr
				v-for="(item, index) in tableData.dataList"
				:key="`data-row-${index}`">
				<td
					v-for="column in tableData.tableHeaders"
					:key="`data-row-${index}-column-${column}`">
					<span class="data-cell">
						{{item[column.toLowerCase()]}}
					</span>
				</td>
			</tr>
		</tbody>
	</table>
</template>

<script>
export default {
	name: "HelloWorld",
	props: {
		tableData: {
			type: Object,
			required: true,
			validator() {
				//TODO: implement prop validation
				return true
			}	
		}
	}
};
</script>

<style lang="scss">
table {
    width: calc(100% - 120px);
	margin: 0 60px;
	border-collapse: collapse;
	font-weight: 400;
	font-family: 'merriweather';
	font-size: 16px;
	thead, tbody {
		tr td, tr th {
			&:first-child {
				text-align: left;
			}
			text-align: right;
		}
	}
	thead tr th:first-child {
		width: 100%;
	}
	tbody tr {
		&:nth-child(2n - 1) {
			background-color: rgb(245, 245, 245);
		}
		td {
			&:first-child .data-cell {
				padding: 0;
			}
			.data-cell {
				padding-left: 10px;
			}
		}
	}
}
</style>